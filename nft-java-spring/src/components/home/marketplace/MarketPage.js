import React, { useState, useEffect } from 'react';
import './MarketPage.scss';
import ButtonPage from '../buttons/ButtonPage';

export default function MarketPage(props) {
    const [activeNext, setActiveNext] = useState(true);
    const [activeBack, setActiveBack] = useState(false);
    useEffect(() => {
        const init = () => {
        }

        return () => {
            init();
        }
    }, []);

    const nextPage = (page) => {
        const numberButtons = props.numberButtons;
        props.nextPage(page);

        if (page - 1 !== 0) {
            setActiveBack(true);
        } else {
            setActiveBack(false);
        }

        if (page === numberButtons.length) {
            setActiveNext(false);
        } else {
            setActiveNext(true);
        }
    }

    const renderButtonPage = () => {
        const numberButtons = props.numberButtons;
        if (numberButtons && numberButtons.length > 1) {
            return <>
                {activeBack ?
                    <div className='back-icon'><i className="fas fa-angle-left"></i></div> :
                    <div className='back-icon' style={{ color: "#08090C" }}><i className="fas fa-angle-left"></i></div>
                }
                {
                    numberButtons.map((numberButton, index) => {
                        return numberButton.display ?
                            <ButtonPage key={index} active={numberButton.active} nextPage={nextPage}>
                                {numberButton.number + 1}
                            </ButtonPage> : <span></span>
                    })
                }
                {activeNext ?
                    <div className='next-icon'><i className="fas fa-chevron-right"></i></div> :
                    <div className='next-icon' style={{ color: "#08090C" }}><i className="fas fa-chevron-right"></i></div>
                }

            </>
        }
    }
    return (
        <div className='paging'>
            <div className='paging-content'>
                {renderButtonPage()}
            </div>
        </div>
    )
}
