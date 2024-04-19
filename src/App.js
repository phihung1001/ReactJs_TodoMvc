import React, {PureComponent } from "react";
import './App.css';
import TodoList from './Components/content/TodoList';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Panigation from './Components/pagination/Pagination';
import ReactPaginate from 'react-paginate';

import { useMemo, useState } from "react";

const isNotCheckAll = (todos = []) => todos.find(todo => !todo.isCheck)

const filterBystatus = (todos = [], status='', id='') => {
  switch (status){
       case 'ACTIVE' : return todos.filter(todo => !todo.isCheck)
       case 'COMPLETED' : return todos.filter(todo => todo.isCheck)
       case 'REMOVE': return todos.filter(todo => todo.id !=id)
       default : return todos
  }
}
let viewList = [];
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isCheckAll: false,
      status: 'ALL',
      currentPage: 1,
      recordsPerPage : 5
    }
    this.headerRef = React.createRef();
    this.pageRef   = React.createRef();
  }

  componentWillMount() {
    this.setState({
      isCheckAll : !isNotCheckAll(this.state.todoList)
    })
  }

  addTodo = (todo = {} ) => {  
     this.setState(preState => {
       return { todoList: [...preState.todoList, todo] }
     })
  }
  
  getTodoEditId = (id='') => {
      const {todoList} = this.state
      const todo = todoList.find(todo => id === todo.id);
      const name = todo.name;
      this.headerRef.current.updateState(id,name);
  }

  onEditTodo= (todo = {}, id =-1) => {
    if(id >=0) {
      const {todoList} = this.state
      const updatedList =todoList.map(item => item.id===id ? ({...item, name: todo.name}) : item)
      
     // console.log(todo)
      //console.log(updatedList.map(item => item))
      this.setState(preState => ({
        todoList : updatedList
      }))
    }
  }

  markCompleted = (id = '') => {
    const {todoList} = this.state
    const updatedList = todoList.map(todo =>  todo.id ===id ? ({...todo, isCheck: !todo.isCheck}) : todo )
    this.setState(preState => {
      return { 
        todoList: updatedList,
        isCheckAll : !isNotCheckAll(updatedList) 
      }

  })
  }

  checkAllTodo = () => {
    const { todoList, isCheckAll } = this.state
    this.setState(preState => ({
      todoList : todoList.map(todo => ({...todo ,isCheck:!isCheckAll})),
      isCheckAll: !preState.isCheckAll
    }))
  }

  setStatusFilter = (status ='') =>{
    this.setState({
      status 
    })
  }
  clearCompleted = () => {
    const { todoList } = this.state
    this.setState({
      todoList: filterBystatus(todoList,'ACTIVE')
    })
  }
  removeTodo = ( id ='') => {
     const { todoList } = this.state 
     this.setState ({
        todoList : filterBystatus(todoList,'REMOVE',id)
     })
  }

  prePage = () => {
    const { currentPage, recordsPerPage, todoList } = this.state;
    if (currentPage !== 1) this.setState({ currentPage: currentPage - 1 });
  }
  nextPage = () => {
    const { currentPage, recordsPerPage, todoList } = this.state;
    const npage = Math.ceil(todoList.length / recordsPerPage)
    if (currentPage !== npage) this.setState({ currentPage: currentPage + 1 });
  }
 
  changePage = (id) => {
    this.setState({currentPage :id})
 }

  render() {
    const { todoList,todoEditId , isCheckAll, status ,numOfTodoLeft,recordsPerPage,currentPage} = this.state
    const npage = Math.ceil(todoList.length / recordsPerPage)
    const numbers = [...Array(npage+1).keys()].slice(1)
    return (
    <>
      <div className="todoapp">
        
         <Header  
             ref={this.headerRef}
             addTodo = {this.addTodo} 
             onEditTodo ={this.onEditTodo}
             isCheckAll ={isCheckAll}
          />
         <TodoList 
             todoList={filterBystatus(todoList,status)}
             currentPage={currentPage}
             getTodoEditId = {this.getTodoEditId}
             onEditTodo = {this.onEditTodo}
             markCompleted ={this.markCompleted}
             isCheckAll ={isCheckAll}
             checkAllTodo={this.checkAllTodo}
             removeTodo = {this.removeTodo}
           
          />
         <Footer
            setStatusFilter={this.setStatusFilter}
            status={status}
            clearCompleted = {this.clearCompleted}
            numOfTodoLeft = {filterBystatus(todoList,'ACTIVE').length}
         />
         <Panigation 
             ref={this.pageRef}
             prePage = {this.prePage}
             nextPage = {this.nextPage}
             changePage = {this.changePage}
             numbers = {numbers}
         />   
        </div>
    </> 
    )}
}

export default App;
