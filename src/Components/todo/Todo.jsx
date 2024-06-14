import './Todo.css';
import React from "react";
import { useState, useContext } from 'react';
import { ThemeContext  } from '../../Context/Theme-Provider';
import { connect } from 'react-redux';

import {
    getTodoEditId,
    markCompleted,
    removeTodo
} from '../../store/actions'

const Todo = ({todo,todoEditId, markCompleted, removeTodo}) => {

  const [ name, setName ] = useState('');
  const { theme } = useContext(ThemeContext);
  const  isEdit= todoEditId===todo.id
  //console.log('isedit',isEdit);
 
  return (
    <>
        <li  className={` ${todo.isCheck ? 'completed' : ''}`} style={{ backgroundColor: theme.background, color: theme.foreground }}
        >
            <div className='view'>
              <input className="toggle" 
                     checked={todo.isCheck} 
                     type="checkbox"
                     onChange ={() => markCompleted(todo.id)}
              />
              <label 
                 style={{ backgroundColor: theme.background, color: theme.foreground }} 
                 onDoubleClick={() => getTodoEditId(todo.id)}> 
                 {todo.name} 
              </label>
              <button className='destroy' 
                       onClick={ () => removeTodo(todo.id)}
                       style={{ backgroundColor: theme.background, color: theme.foreground }}>
              </button>
             </div> 
        </li>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    todoEditId : state.todos.todoEditId,
    ...ownProps
  }
}
const mapDispatchToProps = {
    getTodoEditId,
    markCompleted,
    removeTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);