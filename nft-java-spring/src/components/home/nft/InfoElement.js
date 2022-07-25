import React from 'react';
import ParameterHero from './ParameterHero';

export default function InfoElement(props) {
    return (
        <div className='card-info-elemnt'>
            <span className='nft-life-text' style={{color: props.color, width: '20%', textAlign: 'center'}}>
                {props.name}
            </span>
            <span style={{ width: '60%' }}>
                <ParameterHero />
            </span>
            <span className='nft-life-percent' style={{color: props.color, width: '20%', textAlign: 'center'}}>
                {props.number}
            </span>
        </div>
    )
}
