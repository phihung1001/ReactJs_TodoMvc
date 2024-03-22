import './Todo.css';
import React from "react";
import { useMemo, useState } from 'react';
function Todo(props) {
  const {todo,getTodoEditId,todoEditId,onEditTodo, index, markCompleted} = props;
  const  isEdit= todoEditId===todo.id
  const [name, setName] = useState(todo.name)
  const editTodo = () => {
    onEditTodo({
      ...todo, name
    },index)
  }
  return (
    <>
        <li  className={`${isEdit ? 'editing' : ''} ${todo.isCheck} ? 'completed' : '' `}>
          {!isEdit ?
            <div className='view'>
              <input className="toggle" 
                     checked={todo.isCheck} 
                     type="checkbox"
                     onChange ={() => markCompleted(todo.id)}
              />
              <label onClick={() => getTodoEditId(todo.id)}> {todo.name} </label>
              <button className='destroy'></button>
             </div> :
             <input className='edit' 
                    type='text' 
                    checked={todo.isCheck} 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onKeyDown={e =>{
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

export default Todo;
