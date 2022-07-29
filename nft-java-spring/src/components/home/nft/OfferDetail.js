import React from 'react';
import './OfferDetail.scss';

export default function OfferDetail(props) {
    return (
        <div className='offer'>
            <div className='offer-header'>
                {props.title}
            </div>
            <div className='offer-content'>
                {props.content}
            </div>
        </div>
    )
}
