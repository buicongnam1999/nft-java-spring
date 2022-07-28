import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ButtonSelectRobot(props) {
    const history = useNavigate();
    const loadData = () => {
        props.showModal(false);
        history('/market/nft-detail/'+props.id);
    }
    const gotoDetail = () => {
        props.showModal(true);
        setTimeout(loadData, 1000);
    }
    return (
        <div className='btn-select' style={{fontFamily: props.font, width: props.width}} onClick={() => gotoDetail()}>
            {props.children}
        </div>
    )
}
