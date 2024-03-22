import React, { useMemo } from 'react';

function Footer(props) {
    const filterBtns =[
        {
            title : 'All',
            isActived :true,
            Onclick : () => {
            },
            link: ''
        },
        {
            title : 'Actived',
            isActived :false,
            Onclick : () => {
            },
            link: 'active'
        },
        {
            title : 'Completed',
            isActived :false,
            Onclick : () => {
            },
            link: 'completed'
        }
    ]
    return (
        <footer className="footer">
            <span className="todo-count">
               <strong>2</strong>
               <span></span>
               <span>items</span>
               <span>left</span>
            </span>
            <ul className='filters'>
                {
                    filterBtns.map(btn =>(
                        <FilterBtn key={`btn${btn.title}`}{...btn} />
                    ))
                }
            </ul>
            <button className="clear-completed"> Clear completed</button>
        </footer>
    )
}

function FilterBtn(props) {
    const { title, onClick, link, isActived } = props
    return (
        <>
          <li>
            <a href={`#/${props.link}`} className={`${props.isActived ? 'selected': ''}`}
            onClick={props.onClick}
            >
                {props.title}
            </a>

          </li>
        </>
    )
}
export default Footer;