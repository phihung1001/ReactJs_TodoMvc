import { render } from '@testing-library/react';
import './Header.css';
import React from "react";
import { useMemo, useState } from 'react';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  
  render() {
  const { addTodo ,isCheckAll } = this.props
  const { name } = this.state
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
      this.setState({name:''})
    }

  }
  return (
        <header className="header">
          <h1 class="title" >Todos</h1>
          <input 
                 className="new-todo" 
                 placeholder="What needs to be done?"
                 value={name}
                 onChange={(e) => this.setState({name : e.target.value})}
                 onKeyDown={(e) => handleSubmit(e)}
                 checked={isCheckAll}
          />
       </header>
  )
  }
}

export default Header;
