import { render } from "@testing-library/react";
import React from "react";
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useMemo, useState } from 'react';

class Panigation extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
    const { currentPage, numbers, nextPage, prePage,changePage } = this.props;
    return(
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={prePage}>Prev</a>
                </li>
                {
                    numbers.map((n,i) => (
                        <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                            <a href="#" className="page-link" onClick={() => changePage(n)}> {n} </a>
                        </li>  
                    ))
                }
                <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>Next</a>

                </li>
            </ul>
        </nav>
    )}
}

export default Panigation;