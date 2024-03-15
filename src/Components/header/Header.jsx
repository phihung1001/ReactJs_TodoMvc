import './Header.css';
import React from "react";
import { memo, useState } from 'react';
const Header = memo(() => {
  return (
    <>
        <div className="container">
          <h1 class="title" >Todos</h1>
          <input 
                 class="new-todo" 
                 placeholder="What needs to be done?"
          />
       </div>
    </>
  );
})

export default Header;
