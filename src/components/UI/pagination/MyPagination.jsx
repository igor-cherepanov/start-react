import React from 'react';
import classes from './MyPagination.module.css'
import {usePagination} from "../../../hooks/usePagination";

const MyPagination = ({totalPages, pageNumber, changePage}) => {

    let pagesArray = usePagination(totalPages)

    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map(paginatePageNumber =>
                <span
                    onClick={() => changePage(paginatePageNumber)}
                    className={[classes.page, pageNumber === paginatePageNumber ? classes.page__current : ''].join(' ')}
                    key={paginatePageNumber}
                >
                    {paginatePageNumber}
                </span>
            )}
        </div>
    );
};

export default MyPagination;