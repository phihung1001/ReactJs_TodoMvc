import { render } from '@testing-library/react';
import './Header.css';
import React from "react";
import { useMemo, useState } from 'react';
import {  produce } from 'immer';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     // name: '',
      index: null
    };
    this.inputRef = React.createRef();
  }
  updateState = (Id,Name) => {
    this.setState(prevState => 
        produce(prevState, newState =>  {
          newState.index = Id;
          //newState.name = Name;
        }));
        this.inputRef.current.value=Name;
   //this.setState({name:Name});
   this.inputRef.current.focus();
  }

  render() {
  const { addTodo ,isCheckAll,onEditTodo} = this.props
  const { index } = this.state

  const handleSubmit = (e = {}) => {
    //e.preventDefault();
  
     if(e.key === 'Enter' && this.inputRef.current.value)  {
     // alert(`The name you entered was: ${name}`)
      // console.log(`${name}`)
      if(index){
        console.log(this.inputRef.current.value);
        onEditTodo({
          id: new Date().valueOf(),
          name : this.inputRef.current.value,
          isCheck: false
        },index);
      }else{
        console.log(this.inputRef.current.value);
        addTodo({
          id: new Date().valueOf(),
          //this.inputRef.current.value,
          name: this.inputRef.current.value,
          isCheck: false
        });
      }
      this.inputRef.current.value='';
      this.setState({ index : null});
    }

  }
  return (
        <header className="header">
          <h1 class="title" >Todos</h1>
          <input 
                 type='text'
                 ref={this.inputRef} 
                 className="new-todo" 
                 placeholder="What needs to be done?"
                 //value={name}
                // onChange={(e) => this.setState({name : e.target.value})}
                 onKeyDown={(e) => handleSubmit(e)}
                 checked={isCheckAll}
          />
       </header>
  )
  }
}

export default Header;
