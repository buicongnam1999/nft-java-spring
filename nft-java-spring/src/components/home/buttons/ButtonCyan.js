import React from 'react';
import './Button.scss';

export default function ButtonCyan(props) {
    return (
        <>
            <div className='btn-cyan'>
                {props.children}
            </div>
        </>
    )
}