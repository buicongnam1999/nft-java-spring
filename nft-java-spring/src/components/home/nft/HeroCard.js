import React from 'react';
import './HeroCard.scss';
import Hero from 'assets/images/hero/Hero.png';
import ParameterHero from './ParameterHero';

export default function HeroCard() {
    return (
        <div className='card-market'>
            <div className='card-market-hero'>
                <div className='card-market-hero-image'>
                    <img src={Hero} alt='' />
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
                <div className='card-info-elemnt'>
                    <span className='nft-life-text'>
                        LIFE
                    </span>
                    <span style={{ width: '50%' }}>
                        <ParameterHero />
                    </span>
                    <span className='nft-life-percent'>
                        30
                    </span>
                </div>
                <div className='card-info-elemnt'>
                    <span className='nft-att-text'>
                        ATT
                    </span>
                    <span style={{ width: '50%' }}>
                        <ParameterHero />
                    </span>
                    <span className='nft-life-percent'>
                        30
                    </span>
                </div>
                <div className='card-info-elemnt'>
                    <span className='nft-def-text'>
                        DEF
                    </span>
                    <span style={{ width: '50%' }}>
                        <ParameterHero />
                    </span>
                    <span className='nft-life-percent'>
                        30
                    </span>
                </div>
                <div className='card-info-elemnt'>
                    <span className='nft-spe-text'>
                        SPE
                    </span>
                    <span style={{ width: '50%' }}>
                        <ParameterHero />
                    </span>
                    <span className='nft-life-percent'>
                        30
                    </span>
                </div>
            </div>
        </div>
    )
}
