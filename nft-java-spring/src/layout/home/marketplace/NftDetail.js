import Banner from 'components/home/marketplace/Banner';
import OfferDetail from 'components/home/nft/OfferDetail';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './NftDetail.scss';
import * as marketActions from 'actions/market';
import InfoElement from 'components/home/nft/InfoElement';
import Skill from 'assets/images/skill/Skill.png';


export default function NftDetail() {
    let { id } = useParams();
    const [error, setError] = useState();
    const [nft, setNft] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            if (id !== undefined && id) {
                let result = await marketActions.findItemById(id);
                if (result !== undefined && result.status) {
                    setError();
                    setNft(result.data);
                } else if (!result.status) {
                    setNft();
                    setError(result.data);
                }
            }
        }

        return () => {
            loadData();
        }
    }, [])

    const renderTime = (time) => {
        let date = new Date(time);
        return <span>

        </span>
    }

    return (
        <div style={{ width: '100%', background: '#08090C' }}>
            <Banner />
            <div className='detail'>
                {nft &&
                    <div>
                        <div className='detail-title'>
                            <div className='detail-title-content'>
                                <span>Core</span>
                                <span className='piece'>Piece</span>
                                <span className='rarity'>Rarity: <span className='type'>&nbsp;Legendary</span></span>
                            </div>
                        </div>
                        <div className='detail-content'>
                            <div className='detail-content-info'>
                                <div className='back' style={{margin: '5px 25px', cursor: 'pointer'}}>
                                    <span style={{color: '#55CCCC', fontSize: '20px'}}><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                                    <span style={{fontSize: '20px', fontFamily: 'Odibee Sans', padding: '0 10px'}}>Back</span>
                                </div>
                                <div className='hero'>
                                    <div className='hero-left'>
                                        <div style={{width: '35%'}}>
                                            <div className='hero-left-thumbnail'>
                                                <div className='hero-image-detail card-market'>
                                                    <div className='hero-thumbnail'>
                                                        <img src={require(`assets/images/big/hero/${nft.nft.nftThumbnail}`)} alt='Image Hero' />
                                                    </div>
                                                </div>
                                                <div className='hero-skill-image'>
                                                        <div className='skill-element'>
                                                            <img src={Skill} alt='' />
                                                        </div>
                                                        <div className='skill-element'>
                                                            <img src={Skill} alt='' />
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='hero-info'>
                                            <div className='hero-info-fill'>
                                                <span className='hero-geisha'>Geisha</span>
                                                <span className='hero-name'>
                                                    Humanoide
                                                </span>
                                                <span className='hero-age'>
                                                    Age: 3895
                                                </span>
                                            </div>
                                            <OfferDetail>
                                                <div className='card-info'>
                                                    <div style={{ fontFamily: 'Biger Over', background: '#474554', height: '110px', lineHeight: '110px' }}>
                                                        STATS
                                                    </div>
                                                    <div className='card-info-background'>
                                                        <span style={{ color: '#55CCCC' }}>
                                                            <InfoElement name="LIFE" number={nft.nft.nftLife} icon="fa-solid fa-heart" color="#55CCCC" className="gradient-hero-blue" />
                                                        </span>
                                                        <span>
                                                            <InfoElement name="ATT" number={nft.nft.nftAttack} icon="fa-solid fa-bolt" color="#FFE144" className="gradient-hero-yellow" />
                                                        </span>
                                                        <span>
                                                            <InfoElement name="DEF" number={nft.nft.nftDef} icon="fa-solid fa-shield" color="#5846F9" className="gradient-hero-violet" />
                                                        </span>
                                                        <span>
                                                            <InfoElement name="SPE" number={nft.nft.nftSpeed} icon="fa-solid fa-gauge-simple" color="#F25AC9" className="gradient-hero-pink" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </OfferDetail>
                                            <OfferDetail>
                                                <div className='price-element' style={{ fontFamily: 'Biger Over', background: '#474554', height: '110px', lineHeight: '110px'}}>
                                                    Price
                                                </div>
                                                <div className='detail-time' style={{ fontFamily: 'Odibee Sans', background: '#474554' }}>
                                                    <div className='detail-time-text' style={{background: '#08090C', borderRadius: '8px'}}>
                                                        This aution ends after a planned system upgrade at {renderTime(nft.marketDate)}
                                                    </div>
                                                </div>
                                                <div className='detail-time-info' style={{ background: '#474554' }}>
                                                    <div className='time-info'>
                                                        <div className='time-buy'>
                                                            <i className='far fa-clock'></i> Sale ends <span style={{color: '#F25AC9'}}></span> at <span style={{color: '#F25AC9'}}></span>
                                                        </div>
                                                        <div className='time-top'>
                                                            Top bid -- Reserve price not met.
                                                        </div>
                                                    </div>
                                                </div>
                                            </OfferDetail>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop: '65px'}}>
                                <OfferDetail title="offers" />
                            </div>
                        </div>
                    </div>
                }
                {error &&
                    <div>{error}</div>
                }
            </div>
        </div>
    )
}
