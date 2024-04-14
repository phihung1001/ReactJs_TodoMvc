import './TodoList.css';
import React from "react";
import { useMemo, useState } from 'react';
import Todo from '../todo/Todo';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: [],
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.todoList !== prevProps.todoList ||
      this.props.currentPage !== prevProps.currentPage
    ) {
      this.setState({
        newList: this.props.todoList.slice(
          5 * this.props.currentPage - 5,
          5 * this.props.currentPage
        ),
      });
    }
  }

  render() {
    const { todoList , isCheckAll, checkAllTodo} = this.props
    const { newList } = this.state
    //const records = todoList.slice(firstIndex,lastIndex)
    return (
         <section className='main'>
            <input className='toggle-all' type='checkbox' checked={isCheckAll}/>
            <label htmlFor="toggle-all" onClick={checkAllTodo}></label>
            <ul class="todo-list">
                { 
                  newList.map((todo,index) =>  
                    <Todo 
                      key={`todo${todo.id}`} 
                      {...{todo}} 
                      {...this.props} 
                      index={index} 
                    />
                  )
                }
            </ul>
         </section>
  )}
}

export default TodoList;
