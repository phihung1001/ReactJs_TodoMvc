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
  const editTodo = () => {
    onEditTodo({
      ...todo,name
    },index)
  }
  return (
    <>
        <li  className={`${isEdit ? 'editing' : ''} ${todo.isCheck ? 'completed' : ''}`}>
          {!isEdit ?
            <div className='view'>
              <input className="toggle" 
                     checked={todo.isCheck} 
                     type="checkbox"
                     onChange ={() => markCompleted(todo.id)}
              />
              <label onDoubleClick={() => getTodoEditId(todo.id)}> {todo.name} </label>
              <button className='destroy' onClick={ () => removeTodo(todo.id)}></button>
             </div> :
             <input className='edit' 
                    type='text' 
                    checked={todo.isCheck} 
                    value={name}
                    onChange={(e) => this.setState({name : e.target.value})}

                    onKeyDown={(e) =>{
                      if(e.key ==='Enter'){
                        editTodo();
                      }}

                    }
              />
          }
        </li>
    </>
  );
  }
}

export default Todo;
