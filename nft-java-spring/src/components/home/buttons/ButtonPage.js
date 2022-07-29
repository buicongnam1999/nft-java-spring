import React, { useState } from 'react';

export default function ButtonPage(props) {
    const [active, setActive] = useState(false)
    return (
        <div className='btn-page'>
            {active ?
                <div className='active'>
                    {props.children}
                </div> :
                <div>
                    {props.children}
                </div>
            }


        </div>
    )
}
