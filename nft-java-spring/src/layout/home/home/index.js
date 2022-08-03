import React from 'react';
import './MainHome.scss';
import rec15 from '../../../assets/images/home/Rectangle-15.png';
import rec16 from '../../../assets/images/home/Rectangle-16.png';
import rec17 from '../../../assets/images/home/Rectangle-17.png';
import rec18 from '../../../assets/images/home/Rectangle-18.png';
import rec19 from '../../../assets/images/home/Rectangle-19.png';
import rec20 from '../../../assets/images/home/Rectangle-20.png';
import rec21 from '../../../assets/images/home/Rectangle-21.png';

const MainHome = () => {
    return (
        <div className="wrapper">
            <div className="inner">
                <div className="hero-left">
                    <div className="hero-left__desc">
                        <span className="hero-left__desc-text-bold">Create, Sell & Collect Your Own Creative NFT</span>
                        <span className="hero-left__desc-text-thin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
                        </span>
                        <div className="hero-left__desc-action">
                            <button className="explore-btn">Explore Now</button>
                            <button className="sell-btn">Sell NFT</button>
                        </div>
                        <div className="hero-left__desc-rate">
                            <div className="rate">
                                <p>37k+</p>
                                <span>Artworks</span>
                            </div>
                            <div className="rate">
                                <p>20k+</p>
                                <span>Artists</span>
                            </div>
                            <div className="rate">
                                <p>99k+</p>
                                <span>Aucations</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-image-col">
                        <img src={rec15} alt="rec15"></img>
                        <img src={rec17} alt="rec17"></img>
                        <img src={rec18} alt="rec18"></img>
                    </div>
                    <div className="hero-image-col">
                        <img src={rec16} alt="rec16"></img>
                        <img src={rec19} alt="rec19"></img>
                        <img src={rec20} alt="rec20"></img>
                    </div>
                    <div className="hero-image-col">
                        <img src={rec21} alt="rec21"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHome;
