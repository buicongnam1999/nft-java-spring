import React from 'react';
import './HeroCard.scss';
import Hero from 'assets/images/nft/heroes/Vt649D_preview_rev.png';

export default function HeroCard() {
    return (
        <div className='card-market'>
            <div className='card-market-hero'>
                <div className='card-market-hero-image'>
                    <img src={Hero} alt=''/>
                </div>  
                <div className='card-market-hero-name'>
                    <div className='card-market-type'>
                        Legs
                    </div>
                    <div className='card-market-rarety'>
                        Lengendary
                    </div>
                    <div className='card-market-age'>
                        Age: 3895
                    </div>
                </div>
            </div>
            <div className='card-info'>

            </div>
            <div className=''>

            </div>
        </div>
    )
}
