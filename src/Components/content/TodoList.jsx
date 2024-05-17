import './TodoList.css';
import React from "react";
import {useContext} from 'react';
import { ThemeContext  } from '../../Context/Theme-Provider';
import Todo from '../todo/Todo';
import ScrollFunc from '../Hoc/ScrollHoc';


const TodoList = ({ todoList,recordsPerPage, currentPage, isCheckAll, checkAllTodo, getTodoEditId, onEditTodo, markCompleted,removeTodo}) => {
  const lastIndex = currentPage * recordsPerPage
  const newList = todoList.slice(0, lastIndex);
  const { theme } = useContext(ThemeContext);

  // console.log(recordsPerPage);


    return (
         <section className='main'   style={{ backgroundColor: theme.background, color: theme.foreground }}
         >
            <input className='toggle-all' type='checkbox' checked={isCheckAll}/>
            <label htmlFor="toggle-all" onClick={checkAllTodo}></label>
            <ul class="todo-list">
                { 
                  newList.map((todo) =>  
                    <Todo 
                      theme={theme}
                      key={todo.id} 
                      todo={todo} 
                      getTodoEditId={getTodoEditId}
                      onEditTodo={onEditTodo}
                      markCompleted={markCompleted}
                      removeTodo={removeTodo}
                    />
                  )
                }
            </ul>
         </section>
  )
}

export default ScrollFunc(TodoList);
