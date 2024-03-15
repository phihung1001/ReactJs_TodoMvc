import './Todo.css';
import React from "react";
import { memo, useState } from 'react';
const Todo = memo(() => {
  return (
    <>
      <li>
        <div className="view">
          <input className="choice" type="checkbox"/>
          <label> Todo </label>
          <button className='destroy'></button>
       </div>
       </li>
    </>
  );
})

export default Todo;
