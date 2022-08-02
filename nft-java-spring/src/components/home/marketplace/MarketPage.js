import React, { useState, useEffect } from 'react';
import './MarketPage.scss';
import { Pagination } from "react-headless-pagination";

export default function MarketPage(props) {
    const [activeNext, setActiveNext] = useState(true);
    const [activeBack, setActiveBack] = useState(false);
    const [page, setPage] = useState(0);

    const handlePageChange = (page) => {
        setPage(page);
        props.nextPage(page);

        if (page !== 0) {
            setActiveBack(true);
        } else {
            setActiveBack(false);
        }

        if (page + 1 === props.numberButtons) {
            setActiveNext(false);
        } else {
            setActiveNext(true);
        }
    };
    useEffect(() => {
        const init = () => {
        }

        return () => {
            init();
        }
    }, []);

    const renderButtonPage = () => {
        const numberButtons = props.numberButtons;
        if (numberButtons && numberButtons > 1) {
            return <>
                <Pagination
                    currentPage={page}
                    setCurrentPage={handlePageChange}
                    totalPages={props.numberButtons}
                    edgePageCount={1}
                    middlePagesSiblingCount={1}
                    className="paging-content"
                    truncableText="..."
                    truncableClassName=""
                >
                    {activeBack? 
                        <Pagination.PrevButton className="back-icon"><i className="fas fa-angle-left"></i></Pagination.PrevButton> :
                        <Pagination.PrevButton className="back-icon" style={{ color: "#08090C" }}><i className="fas fa-angle-left"></i></Pagination.PrevButton>
                    }
                    <div className="flex items-center justify-center flex-grow">
                        <Pagination.PageButton
                            activeClassName="btn-page-active"
                            inactiveClassName="btn-page"
                            className=""
                        />
                    </div>
                    {activeNext?
                        <Pagination.NextButton className="next-icon"><i className="fas fa-chevron-right"></i></Pagination.NextButton> :
                        <Pagination.NextButton className="next-icon" style={{ color: "#08090C" }}><i className="fas fa-chevron-right"></i></Pagination.NextButton>
                    }
                    
                </Pagination>
            </>
        }
    }
    return (
        <div className='paging'>
            <div className=''>
                {renderButtonPage()}
            </div>
        </div>
    )
}
