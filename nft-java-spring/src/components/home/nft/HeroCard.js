import React from 'react';
import './HeroCard.scss';
import Hero from 'assets/images/hero/Hero.png';
import ParameterHero from './ParameterHero';
import InfoElement from './InfoElement';

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
                <InfoElement name="LIFE" number="30" color="#55CCCC"/>
                <InfoElement name="ATT" number="30" color="#FFE144"/>
                <InfoElement name="DEF" number="30" color="#5846F9"/>
                <InfoElement name="SPE" number="30" color="#F25AC9"/>
            </div>
        </div>
    )
}
