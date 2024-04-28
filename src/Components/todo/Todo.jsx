import './Todo.css';
import React from "react";
import { useMemo, useState } from 'react';
class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
  const {todo,getTodoEditId,todoEditId,onEditTodo, index, markCompleted, removeTodo} = this.props;
  const  isEdit= todoEditId===todo.id
  const { name } = this.state
 
  return (
    <>
        <li  className={` ${todo.isCheck ? 'completed' : ''}`}>
            <div className='view'>
              <input className="toggle" 
                     checked={todo.isCheck} 
                     type="checkbox"
                     onChange ={() => markCompleted(todo.id)}
              />
              <label onDoubleClick={() => getTodoEditId(todo.id)}> {todo.name} </label>
              <button className='destroy' onClick={ () => removeTodo(todo.id)}></button>
             </div> 
        </li>
    </>
  );
  }
}
Todo.propTypes = {
  name: PropTypes.string,
  addTodo: PropTypes.func,
};

export default Todo;
