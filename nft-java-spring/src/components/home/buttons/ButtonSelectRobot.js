import React from 'react';

export default function ButtonSelectRobot(props) {

    return (
        <div className='btn-select' style={{fontFamily: props.font, width: props.width}} onClick={() => props.showModal(true)}>
            {props.children}
        </div>
    )
}
