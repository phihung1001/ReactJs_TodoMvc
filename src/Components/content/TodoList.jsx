import './TodoList.css';
import React from "react";
import { useMemo, useState } from 'react';
import Todo from '../todo/Todo';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todoList , isCheckAll, checkAllTodo} = this.props
    return (
         <section className='main'>
            <input className='toggle-all' type='checkbox' checked={isCheckAll}/>
            <label htmlFor="toggle-all" onClick={checkAllTodo}></label>
            <ul class="todo-list">
                {
                  todoList.map((todo,index) =>  
                    <Todo key={`todo${todo.id}`} {...{todo}} {...this.props} index={index} />
                  )
                }
            </ul>
         </section>
  )}
}

export default TodoList;
