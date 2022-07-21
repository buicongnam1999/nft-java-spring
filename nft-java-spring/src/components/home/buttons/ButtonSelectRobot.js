import React from 'react';
import './Button.scss';

export default function ButtonSelectRobot(props) {
    return (
        <div className='btn-select'>
            {props.children}
        </div>
    )
}