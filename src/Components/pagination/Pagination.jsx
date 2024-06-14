import { render } from "@testing-library/react";
import React from "react";
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useMemo, useState , useContext} from 'react';
import { ThemeContext } from "../../Context/Theme-Provider";

const Panigation = ({ currentPage, numbers, nextPage, prePage,changePage }) => {
    const { theme } = useContext(ThemeContext);
    return(
        <nav style={{ backgroundColor: theme.background, color: theme.foreground }}>
            <ul className="pagination" style={{ backgroundColor: theme.background, color: theme.foreground }}>
                <li className="page-item" >
                    <a style={{ backgroundColor: theme.background, color: theme.foreground }} href="#" className="page-link" onClick={prePage}>Prev</a>
                </li>
                {
                    numbers.map((n,i) => (
                        <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                            <a style={{ backgroundColor: theme.background, color: theme.foreground }} href="#" className="page-link" onClick={() => changePage(n)}> {n} </a>
                        </li>  
                    ))
                }
                <li className="page-item">
                    <a style={{ backgroundColor: theme.background, color: theme.foreground }} href="#" className="page-link" onClick={nextPage}>Next</a>

                </li>
            </ul>
        </nav>
    )
}

export default Panigation;