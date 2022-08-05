import React, { useState, useEffect } from 'react';
import Banner from 'components/home/marketplace/Banner';
import './MarketPlace.scss';
import Search from 'components/home/marketplace/left/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonPieces from 'components/home/buttons/ButtonPieces';
import ButtonComplete from 'components/home/buttons/ButtonComplete';
import SelectMarket from 'components/home/selects/SelectMarket';
import ButtonResetMarket from 'components/home/buttons/ButtonResetMarket';
import { renderNavMarket } from 'ultis/helper';
import { sortList, navbarMarket } from 'constants/index';
import HeroCard from 'components/home/nft/HeroCard';
import HeroNotFound from 'assets/images/hero/Hero-found.png';
import Storage from 'ultis/storage';
import { useDispatch } from 'react-redux';
import * as marketActions from 'actions/market';
import MarketPage from 'components/home/marketplace/MarketPage';
import ModalLoad from 'components/modal/ModalLoad';
import ModalAccept from 'components/modal/AcceptOffer/ModalAccept';

export default function MarketPlace() {
    const [defaultSelect, setDefaultSelect] = useState(0);
    const [navbar, setNavbar] = useState(navbarMarket);
    const [showModal, setShowModal] = useState(false);
    const pageStatusTmp = Storage.get('pageStatusMarket');
    const [nfts, setNfts] = useState();
    const [numberButtons, setNumberButtons] = useState();
    const [showAcceptModal, setShowAcceptModal] = useState(false);
    const [filter, setFilter] = useState(
        pageStatusTmp !== null ? pageStatusTmp : 0
    )
    const selectOption = (value) => {
        setDefaultSelect(value);
    };

    const openOrCloseNav = (name) => {
        if (name) {
            const newState = navbar.map((object) => {
                if (object.name === name) {
                    return { ...object, active: !object.active };
                }

                return object;
            });
            setNavbar(newState);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            let result = await marketActions.fetchItemList(filter);
            if (result !== undefined && result.status) {
                const items = result.data;
                setNfts(items);
            }
        }
        const loadCountNft = async () => {
            let result = await marketActions.fetchItemCount();
            if (result !== undefined && result.status) {
                let page = Math.ceil(result.data / 8);
                setNumberButtons(page);
            }
        }
        return () => {
            loadData();
            loadCountNft();
        }
    },
    [
        filter,
        nfts,
        // countNft
    ])

    const checkBox = (name) => {
        if (name) {
            const state = navbar.map(object => {
                if (object.child) {
                    object.child.map((e) => {
                        if (e.name === name) {
                            return { ...e, activeChild: true };
                        }
                        return e;
                    });
                }

                return object;
            });
            setNavbar(state);
        }
    };

    const nextPage = (page) => {
        setFilter(page);
    }

    return (
        <>
            <div className="market">
                {showModal&& <ModalLoad showModal={showModal} onCloseModal={() => setShowModal(false)} />}
                {showAcceptModal&& <ModalAccept closeModal={setShowAcceptModal}/>}
                <Banner />
                <div className='market-content'>
                    <Container>
                        <Row>
                            <Col xs={3}>
                                <div className="btn-group-market">
                                    <div className="btn-group-search">
                                        <ButtonPieces />
                                        <ButtonComplete />
                                    </div>
                                    <div className="btn-group"></div>
                                    <ButtonResetMarket />
                                </div>
                                <Search />
                                <div className='navbar-market'>
                                    {renderNavMarket(navbar, openOrCloseNav, checkBox)}
                                </div>
                            </Col>
                            <Col>
                                <div className="market-list">
                                    <div className="title-list">Pieces list</div>
                                    <div className="market-sort">
                                        <div className="market-sort-text">Sort by</div>
                                        <div className="market-sort-select">
                                            <SelectMarket sortList={sortList} selectOption={(e) => selectOption(e)} />
                                        </div>
                                    </div>
                                </div>
                                {nfts &&
                                    <div className='list'>
                                        <div className='list-nft'>
                                            {nfts.map((nft, index) =>
                                                <HeroCard
                                                    key={index}
                                                    showModal={setShowModal}
                                                    nftPrice={nft.nftPrice}
                                                    nftLife={nft.nft.nftLife}
                                                    nftAttack={nft.nft.nftAttack}
                                                    nftDef={nft.nft.nftDef}
                                                    nftSpeed={nft.nft.nftSpeed}
                                                    nft={nft.nft}
                                                    setShowAcceptModal={setShowAcceptModal}
                                                />
                                            )}
                                        </div>
                                        <MarketPage numberButtons={numberButtons} nextPage={nextPage} />
                                    </div>
                                }
                                {!nfts && <div className='not-nft'>
                                    <div className='not-nft-img'>
                                        <img src={HeroNotFound} alt='' />
                                    </div>
                                    <div className='not-nft-text'>
                                        Not Pieces found
                                    </div>
                                </div>
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
