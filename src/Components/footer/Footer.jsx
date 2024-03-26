import React, { useMemo } from 'react';
import './Footer.css'
class Footer extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
    const { status, setStatusFilter , clearCompleted , numOfTodoLeft} = this.props
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
    return (
        <footer className="footer">
            <span className="todo-count">
               <strong>{numOfTodoLeft}</strong>
               <span></span>
               <span> {numOfTodoLeft<=1 ? "item" : 'items'} </span>
               <span>left</span>
            </span>
            <ul className='filters'>
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
}

class FilterBtn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    const { title, onClick, link, isActived } = this.props
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
}
export default Footer;