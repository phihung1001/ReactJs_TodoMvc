import { render } from '@testing-library/react';
import './Header.css';
import React, { useRef } from "react";
import { useState , useContext ,useImperativeHandle,forwardRef } from 'react';
import {  produce } from 'immer';
import { ThemeContext  } from '../../Context/Theme-Provider';

const Header = forwardRef(({addTodo ,isCheckAll,onEditTodo}, ref) => {
   const [index, setIndex ] = useState(null);
   const inputRef = useRef();
   const { theme } = useContext(ThemeContext);

   
   useImperativeHandle(ref, () => ({
    updateState(Id,Name){
    setIndex(Id)
        inputRef.current.value=Name;
        inputRef.current.focus();
  }}));

  const handleSubmit = (e = {}) => {
     if(e.key === 'Enter' && inputRef.current.value)  {
      if(index){
        onEditTodo({
          id: new Date().valueOf(),
          name : inputRef.current.value,
          isCheck: false
        },index);
      }else{
        addTodo({
          id: new Date().valueOf(),
          name: inputRef.current.value,
          isCheck: false
        });
      }
      inputRef.current.value='';
      setIndex(null);
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
                 checked={isCheckAll}
          />
       </header>
  );
});

export default Header;
