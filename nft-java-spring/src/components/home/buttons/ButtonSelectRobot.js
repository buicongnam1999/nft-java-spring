import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ButtonSelectRobot(props) {
    const history = useNavigate();
    const loadData = (id) => {
        props.showModal(false);
        history('/market/nft-detail/'+id);
    }
    const gotoDetail = (id) => {
        props.showModal(true);
        setTimeout(() => {
            loadData(id);
        }, 1000);
    }
    return (
        <div className='btn-select' style={{fontFamily: props.font, width: props.width}} onClick={() => gotoDetail(props.nftId)}>
            {props.children}
        </div>
    )
}
