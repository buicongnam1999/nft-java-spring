import React from 'react';
import './HeroCard.scss';
import Hero from 'assets/images/hero/Hero.png';
import InfoElement from './InfoElement';
import MedaCoinIcon from 'assets/images/icon/MedaCoinIcon.png';
import ButtonSelectRobot from '../buttons/ButtonSelectRobot';
import ButtonBuy from '../buttons/ButtonBuy';

export default function HeroCard(props) {
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
            <div className='card-price'>
                <div className='card-price__token'>
                    <div className='token-icon'>
                        <img src={MedaCoinIcon} alt="" />
                    </div>
                    <div className='token-name'>
                        MON
                    </div>
                </div>
                <div className='card-price__amount'>
                    00.18
                </div>
            </div>
            <div className='card-button'>
                <ButtonSelectRobot font="Odibee Sans" width="40%" showModal={props.showModal}>Details</ButtonSelectRobot>
                <ButtonBuy font="Odibee Sans" width="40%" showModal={props.showModal}>Buy Now</ButtonBuy>
            </div>
        </div>
    )
}
