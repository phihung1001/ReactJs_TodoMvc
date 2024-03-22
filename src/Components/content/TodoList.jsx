import './TodoList.css';
import React from "react";
import { useMemo, useState } from 'react';
import Todo from '../todo/Todo';
function TodoList(props) {
  const { todoList }= props
  return (
    <>
         <section className='main'>
            <input className='toggle-all'/>
            <label htmlFor="toggle-all"></label>
            <ul class="todo-list">
                {
                  todoList.map((todo,index) =>  <Todo key={`todo${todo.id}`} {...{todo}} {...props} 
                  index={index} />)
                }
              
            </ul>
         </section>
    </>
  );
}

export default TodoList;
