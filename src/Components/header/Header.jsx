import './Header.css';
import React from "react";
import { useMemo, useState } from 'react';
function Header(props)  {
  const { addTodo } = props
  const [name, setName] = useState('');

  const handleSubmit = (e = {}) => {
    //e.preventDefault();
     if(e.key === 'Enter' && name)  {
     // alert(`The name you entered was: ${name}`)
      // console.log(`${name}`)
      addTodo({
        id: new Date().valueOf(),
        name,
        isCheck: false
      })
      setName('')
    }

  }
  return (
        <header className="header">
          <h1 class="title" >Todos</h1>
          <input 
                 className="new-todo" 
                 placeholder="What needs to be done?"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 onKeyDown={(e) => handleSubmit(e)}
          />
       </header>
  );
}

export default Header;
