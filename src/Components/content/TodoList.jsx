import './TodoList.css';
import React, { useState,useEffect,useContext } from "react";
import { ThemeContext  } from '../../Context/Theme-Provider';
import Todo from '../todo/Todo';
import { connect , useDispatch} from 'react-redux';
import { fetchTodoData } from "../../store/actions/apiTodo";

import {
  checkAllTodo
} from '../../store/actions'

const TodoList = ({ todoList, isCheckAll, checkAllTodo, getTodoEditId, onEditTodo, markCompleted,removeTodo, scrollRef, onScroll }) => {
  console.log('todoList:', todoList);
  const recordsPerPage =5;
  const [currentPage, setCurrentPage ] = useState(1);
  const lastIndex = currentPage * recordsPerPage
  const newList = todoList.slice(0, lastIndex);
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();


  useEffect(() => {
    fetchTodoData().then((response) => {
      dispatch(response);
    });
  }, [dispatch]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setTimeout(() => {
        setCurrentPage(currentPage+ 1);
      }, 1000);
    }
  };

    return (
         <section className='main'  ref={scrollRef}  onScroll={onScroll} style={{ backgroundColor: theme.background, color: theme.foreground }}>
            <input className='toggle-all' type='checkbox' checked={isCheckAll}/>
            <label htmlFor="toggle-all" onClick={checkAllTodo}></label>
            <ul class="todo-list">
                { 
                  newList.map((todo) =>  
                    <Todo                 
                      theme={theme}
                      key={todo.id} 
                      todo={todo} 
                      //getTodoEditId={getTodoEditId}
                     // onEditTodo={onEditTodo}
                      //markCompleted={markCompleted}
                      //removeTodo={removeTodo}
                    />
                  
                  )
                }
            </ul>
         </section>
  )
}

const mapStateToProps = (state) => {
    return {
      todoList: state.apiReducer.todoList,
      isCheckAll : state.todos.isCheckAll
    }
}

const mapDispatchToProps = {
   checkAllTodo
} 
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);