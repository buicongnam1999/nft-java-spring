import React from 'react';
import ParameterHero from './ParameterHero';

export default function InfoElement(props) {
    return (
        <div className='card-info-elemnt'>
            <span className='nft-life-text' style={{color: props.color}}>
                {props.name}
            </span>
            <span style={{ width: '50%' }}>
                <ParameterHero />
            </span>
            <span className='nft-life-percent' style={{color: props.color}}>
                {props.number}
            </span>
        </div>
    )
}
