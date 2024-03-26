import React, {PureComponent } from "react";
import './App.css';
import TodoList from './Components/content/TodoList';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
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
class App extends PureComponent {
  state = {
    todoList: [ 
    ],
    todoEditId:'',
    isCheckAll: false,
    status: 'ALL',
  }

  componentWillMount() {
    this.setState({
      isCheckAll : !isNotCheckAll(this.state.todoList)
    })
  }

  addTodo = (todo = {} ) => {
    // console.log('todo', todo)
    // console.log(todoList.length());
    
     this.setState(preState => {
       return { todoList: [...preState.todoList, todo] }
     })
  }
  
  getTodoEditId = (id='') => {
    this.setState({
        todoEditId : id
    })
  }

  onEditTodo= (todo = {}, index =-1) => {
    if(index >=0) {
      const {todoList} = this.state
      todoList.splice(index,1,todo)
      this.setState({
        todoEditId:''
      })
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
  render() {
    const { todoList,todoEditId , isCheckAll, status ,numOfTodoLeft} = this.state
    return (
    <>
      <div className="todoapp">
        
         <Header  addTodo = {this.addTodo} isCheckAll ={isCheckAll}/>
         <TodoList 
             todoList={filterBystatus(todoList,status)}
             todoEditId ={todoEditId}
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
        </div>
    </> 
    )}
}

export default App;
