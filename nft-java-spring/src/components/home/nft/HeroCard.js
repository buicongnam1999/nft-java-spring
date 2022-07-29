import React, { useEffect } from 'react';
import './HeroCard.scss';
import Hero from 'assets/images/hero/Hero.png';
import InfoElement from './InfoElement';
import MedaCoinIcon from 'assets/images/icon/MedaCoinIcon.png';
import ButtonSelectRobot from '../buttons/ButtonSelectRobot';
import ButtonBuy from '../buttons/ButtonBuy';

export default function HeroCard(props) {
    useEffect(() => {
        return () => {

        }
    }, [])

    const showDetaiNft = () => {

    }
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
                <InfoElement name="LIFE" number={props.nft.nftLife} color="#55CCCC" class="gradient-hero-blue" />
                <InfoElement name="ATT" number={props.nft.nftAttack} color="#FFE144" class="gradient-hero-yellow" />
                <InfoElement name="DEF" number={props.nft.nftDef} color="#5846F9" class="gradient-hero-violet" />
                <InfoElement name="SPE" number={props.nft.nftSpeed} color="#F25AC9" class="gradient-hero-pink" />
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
                    {props.nftPrice}
                </div>
            </div>
            <div className='card-button'>
                <ButtonSelectRobot font="Odibee Sans" width="40%" showModal={props.showModal} nftId={props.nft.id}>Details</ButtonSelectRobot>
                <ButtonBuy font="Odibee Sans" width="40%" showModal={props.showModal}>Buy Now</ButtonBuy>
            </div>
        </div>
    )
}
