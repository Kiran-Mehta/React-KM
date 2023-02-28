import { useState } from "react";
import './style.css'


const Pagination = ({ paginate, totalItemperPage, totalItems, currentPage, onNextClick, onPrevClick, maxPageNumberLimit, minPageNumberLimit }) => {


    const totalPages = Math.ceil(totalItems / totalItemperPage);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }


    //page ellipses

    let pageIncrementEllipses = null;

    if (pages.length > maxPageNumberLimit) {
        pageIncrementEllipses = <li onClick={() => onNextClick()}>&hellip;</li>
    }

    let pageDecrementEllipses = null;

    if (minPageNumberLimit >= 1) {
        pageDecrementEllipses = <li onClick={() => onPrevClick()}>&hellip;</li>
    }

    return (
        <div className="page-numbers">
            <button type="button" onClick={() => onPrevClick()}>
                Previous
            </button>
            <ul>
                {pageDecrementEllipses}
                {
                    pages.map(number => {
                         if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit)
                        return(
                        <li  key={number} id={number} onClick={() => paginate(number)} className={`page-number-list ${currentPage === number ? 'active' : null}`}>
                            <a href="#">
                                {number}
                            </a>
                        </li>

                    )}
                    )
                } 
           
            {pageIncrementEllipses}
            </ul>
            <button type="button" onClick={() => onNextClick()}>
                Next
            </button>
        </div>
    )
}


export default Pagination