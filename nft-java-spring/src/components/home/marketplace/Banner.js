import React from 'react';
import BannerImg from 'assets/images/banner/banner-market.png';
import './Banner.scss'

export default function Banner() {
    return (
        <>
            <div className='banner'>
                <div className='banner-img'>
                    <img src={BannerImg} alt='' />
                </div>
            </div>
            <section className="seperator-wrapper">
                <div className="seperator gradient">
                </div>
            </section>
        </>

    )
}
