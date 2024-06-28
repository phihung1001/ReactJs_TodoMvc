import { render } from '@testing-library/react';
import './Header.css';
import React, { useRef } from "react";
import { useState ,useEffect, useContext ,useImperativeHandle,forwardRef } from 'react';
import {  produce } from 'immer';
import { ThemeContext  } from '../../Context/Theme-Provider';
import { connect } from 'react-redux';
import { addTodo,onEditTodo } from '../../store/actions';
import { postData } from '../../API/todoData';
import { editData } from '../../API/todoData';

const Header = forwardRef(({todoList,addTodo,nameEdit,todoEditId ,isCheckAll,onEditTodo}, ref) => {
   const inputRef = useRef();
   const { theme } = useContext(ThemeContext);
   
  useEffect(() => {
    console.log('todoinheader',todoList);
  });
  
  const handleSubmit = (e = {}) => {
     if(e.key === 'Enter')  {
      console.log('todoEditId',todoEditId)

      if(todoEditId){
        onEditTodo({
          id: new Date().valueOf(),
          name : inputRef.current.value,
          isCheck: false
        },todoEditId);
      }else{
        addTodo({
          id: new Date().valueOf(),
          name: inputRef.current.value,
          isCheck: false
        });
      }
      inputRef.current.value='';
      //setIndex(null);
    }
  }

  return (
        <header className="header">
          <h1 class="title" >Todos</h1>
          <input 
                 type='text'
                 ref={inputRef} 
                 className="new-todo" 
                 placeholder="What needs to be done?"
                 style={{ backgroundColor: theme.background, color: theme.foreground }}
                 onKeyDown={(e) => handleSubmit(e)}
                 //checked={isCheckAll}
          />
       </header>
  );
});
const mapStateToProps = (state) => {
  return {
    todoList: state.todos.todoList,
    todoEditId : state.todos.todoEditId
  }
}

const mapDispatchToProps = {
  addTodo,
  onEditTodo,
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);

  //  useImperativeHandle(ref, () => ({
  //       setIndex(todoEditId);
  //       inputRef.current.value=nameEdit;
  //       inputRef.current.focus();
  // }));