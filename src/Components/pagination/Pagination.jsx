import { render } from "@testing-library/react";
import React from "react";
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useMemo, useState } from 'react';

function Panigation(props){
    const { todoList } = props
    const [ currentPage ,setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage*recordsPerPage;
    const firstIndex = lastIndex -recordsPerPage;
    const records = todoList.slice(firstIndex,lastIndex);
    const npage = Math.ceil(todoList.length / recordsPerPage)
    const numbers = [...Array(npage+1).keys()].slice(1)
  
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
    )
    function prePage() {

         if(currentPage !==firstIndex) {
            console.log(records.map((index) => (
                {index}
            )))
          setCurrentPage(currentPage-1)
          
         }
     }
     function changePage(id) {
        console.log(id)
        setCurrentPage(id)
        console.log(records.map((index) => (
            {index}
        )))
     }
     function nextPage() {
         if(currentPage !==lastIndex) {
          setCurrentPage(currentPage+1)
          console.log(records.map((index) => (
            {index}
        )))
         }
     }
}

export default Panigation;