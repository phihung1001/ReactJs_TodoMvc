import React, {PureComponent } from "react";
import './App.css';
import TodoList from './Components/content/TodoList';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import { useMemo, useState } from "react";

class App extends PureComponent {
  state = {
    todoList: [ 
    ],
    todoEditId:'' 
  }


  addTodo = (todo = {} ) => {
    // console.log('todo', todo)
     this.setState(preState => {
       return { todoList: [...preState.todoList, todo] }
     })
  }
  getTodoEditId = (idid ='') => {
    this.setState({
        todoEditId : idid
    })
  }

  onEditTodo= (todo = {}, index =-1) => {
    if(index >=0) {
      const {todoList: list } = this.state
      list.splice(index,1,todo)
      this.setState({
        todoList:list,
        todoEditId:''
      })
    }
  }

  markCompleted = (id = '') => {
    this.setState(preState => {
      return { todoList: preState.todoList.map(todo => 
          todo.id ===id ?
          ({...todo, isCheck: !todo.isCheck})
          : todo
        )
      }

  })
  }
  
  render() {
    const { todoList,todoEditId , removeTodo} = this.state
    return (
    <>
      <div className="todoapp">
         <Header  addTodo = {this.addTodo}/>
         <TodoList 
             todoList={todoList}
             todoEditId ={todoEditId}
             getTodoEditId = {this.getTodoEditId}
             onEditTodo = {this.onEditTodo}
             markCompleted ={this.markCompleted}
             removeTodo= {removeTodo}
          />
         <Footer/>
        </div>
    </> 
    )}
}

export default App;
