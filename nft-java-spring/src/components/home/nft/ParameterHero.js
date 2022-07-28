import React, { useState, useEffect } from 'react';
import './ParameterHero.scss';

export default function ParameterHero(props) {
    const [width, setWidth] = useState('100%');
    useEffect(() => {
        const changeWidth = () => {
            let widthNow = Math.ceil((props.width * 100 / 150)) + '%';
            setWidth(widthNow);
        }

        return () => {
            changeWidth();
        }
    }, [props.width])

    return (
        <div className='parameter'>
            <div className={"seperator " + props.class} style={{ width: width }}>
            </div>
        </div>
    )
}
