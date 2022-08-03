import React from 'react'

export default function ButtonBuy(props) {
    return (
        <>
            <div className='btn-buy' style={{fontFamily: props.font, width: props.width}}>
                {props.children}
            </div>
        </>
    )
}
