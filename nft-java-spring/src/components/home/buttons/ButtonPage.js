import React, { useState } from 'react';

export default function ButtonPage(props) {
    return (
        <>
            {props.active ?
                <div className='btn-page-active'>
                    <div>
                        {props.children}
                    </div>
                </div> :
                <div className='btn-page' onClick={() => props.nextPage(props.children)}>
                    <div>
                        {props.children}
                    </div>
                </div>
            }
        </>
    )
}
