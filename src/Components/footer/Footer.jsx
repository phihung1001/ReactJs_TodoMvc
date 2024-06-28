import React, { useMemo, useContext } from 'react';
import { ThemeContext  } from '../../Context/Theme-Provider';
import {
    setStatusFilter,
    clearCompleted,
    indexTodo
  } from '../../store/actions'

import { connect } from 'react-redux';

const Footer = ({ status, setStatusFilter , clearCompleted , numOfTodoLeft} ) => {

    const filterBtns =[
        {
            title : 'All',
            isActived : status === 'ALL',
            onClick : () => setStatusFilter('ALL'),
            link: ''
        },
        {
            title : 'Active',
            isActived :status ==='ACTIVE',
            onClick : () => setStatusFilter('ACTIVE'),
            link: 'active'
        },
        {
            title : 'Completed',
            isActived :status ==='COMPLETED',
            onClick : () => setStatusFilter('COMPLETED'),
            link: 'completed'
        }
    ]
    const { theme } = useContext(ThemeContext);

    return (
        <footer className="footer"  style={{ backgroundColor: theme.background, color: theme.foreground }}>
            <span className="todo-count"  style={{ backgroundColor: theme.background, color: theme.foreground }}>
               <strong>{numOfTodoLeft}</strong>
               <span></span>
               <span> {numOfTodoLeft<=1 ? "item" : 'items'} </span>
               <span>left</span>
            </span>
            <ul className='filters' >
                {
                    filterBtns.map(btn =>(
                        <FilterBtn key={`btn${btn.title}`} {...btn} />
                    ))
                }
            </ul>
            <button 
                className="clear-completed"
                onClick={clearCompleted}
            > 
                Clear completed
            </button>
        </footer>
    )
}


const FilterBtn =({ title, onClick, link, isActived } ) => {
    return (
        <>                       
          <li>
            <a href={`/#${link}`} className={`${isActived ? 'selected': ''}`}
            onClick={onClick} >
                {title} 
            </a>
          </li>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      todoList: state.todos.todoList,
      isCheckAll : state.todos.isCheckAll,
      numOfTodoLeft :state.todos.numOfTodoLeft
    }
}

const mapDispatchToProps = {
    setStatusFilter,
    clearCompleted,
    indexTodo
} 
export default connect(mapStateToProps,mapDispatchToProps)(Footer);