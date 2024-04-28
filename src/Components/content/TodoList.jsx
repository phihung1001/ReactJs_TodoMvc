import './TodoList.css';
import React from "react";
import { useMemo, useState } from 'react';
import Todo from '../todo/Todo';
const recordsPerPage = 5
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    }
  }
  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.todoList !== prevProps.todoList ||
  //     this.props.currentPage !== prevProps.currentPage
  //   ) {
  //     this.setState({
  //       newList: this.props.todoList.slice(
  //         5 * this.props.currentPage - 5,
  //         5 * this.props.currentPage
  //       ),
  //     });
  //   }
  // }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { todoList } = this.props;
    const { currentPage } = this.state;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setTimeout(() => {
          this.setState(prevState => ({
            currentPage: prevState.currentPage + 1,
          }));
        }, 1000);
    }
  }


  render() {
    const { todoList , isCheckAll, checkAllTodo} = this.props
    const { currentPage } = this.state
   
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const newList = todoList.slice(0, lastIndex);

    return (
         <section className='main' ref={this.props.scrollRef}
         onScroll={this.props.onScroll}>

            <input className='toggle-all' type='checkbox' checked={isCheckAll}/>
            <label htmlFor="toggle-all" onClick={checkAllTodo}></label>
            <ul class="todo-list">
                { 
                  newList.map((todo,index) =>  
                    <Todo 
                      key={`todo${todo.id}`} 
                      {...{todo}} 
                      {...this.props} 
                      index={index} 
                    />
                  )
                }
            </ul>
         </section>
  )}
}
Todolist.propTypes = {
  todoList: propTypes.array.isRequired,
};
export default TodoList;
