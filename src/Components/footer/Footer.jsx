import React, { memo } from 'react';

const Footer = memo((props) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>3</strong>
                <span> </span>
                <span>items </span>
                <span> left</span>
            </span>
            <ul className="filters">
                <li>
                    <a>
                        All
                    </a>
                </li>
                <span></span>
                <li>
                    <a>
                        Active
                    </a>
                </li>
                <span></span>
                <li>
                    <a>
                        Completed
                    </a>
                </li>
            </ul>
          
        </footer>
    )
})

export default Footer