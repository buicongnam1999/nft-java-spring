import React from 'react'

export default function ButtonBuy(props) {
    const onClickBuy = () => {
        props.setShowAcceptModal(true);
    }
    return (
        <>
            <div className='btn-buy' style={{fontFamily: props.font, width: props.width}} onClick={() => onClickBuy()}>
                {props.children}
            </div>
        </>
    )
}
