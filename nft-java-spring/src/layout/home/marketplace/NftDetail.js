import Banner from 'components/home/marketplace/Banner';
import OfferDetail from 'components/home/nft/OfferDetail';
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import './NftDetail.scss';
import Hero from 'assets/images/big/hero/Hero.png';

export default function NftDetail() {
    let { id } = useParams();
    useEffect(() => {
        if (id !== undefined && id) {

        }

    }, [id])

    return (
        <div style={{width: '100%', background: '#08090C'}}>
            <Banner />
            <div className='detail'>
                <div className='detail-title'>
                    <div className='detail-title-content'>
                        <span>Core</span>
                        <span>Piece</span>
                        <span>Rarity: <span className='rarity'>&nbsp;Legendary</span></span>
                    </div>
                </div>
                <div className='detail-content'>
                    <div className='detail-content-info'>
                        <div className='hero'>
                            <div className='hero-image'>
                                <div>
                                    <img src={Hero} alt=''/>
                                </div>
                            </div>
                            <div className='hero-info'>
                                    
                            </div>
                        </div>
                    </div>
                    <OfferDetail title="offers"/>
                </div>
            </div>
        </div>
    )
}
