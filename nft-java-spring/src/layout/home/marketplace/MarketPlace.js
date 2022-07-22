import React, { useState } from 'react';
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
import ModalLoad from 'components/modal/ModalLoad';

export default function MarketPlace() {
    const [defaultSelect, setDefaultSelect] = useState(0);
    const [navbar, setNavbar] = useState(navbarMarket);
    const [showModal, setShowModal] = useState(true);
    const selectOption = (value) => {
        setDefaultSelect(value);
    }

    const openOrCloseNav = (name) => {
        if (name) {
            const newState = navbar.map(object => {
                if (object.name === name) {
                    return { ...object, active: !object.active }
                }

                return object;
            });
            setNavbar(newState);
        }
    }

    const checkBox = (name) => {
        if (name) {
            const newState = navbar.map(object => {
                if (object.child) {
                    object.child.map((e) => {
                        if (e.name === name) {
                            return { ...e, activeChild: true }
                        }
                        return e;
                    })
                }

                return object;
            });
            setNavbar(newState);
        }
    }

    return (
        <>
            <div className='market'>
                <ModalLoad showModal={showModal} onCloseModal={() => setShowModal(false)} />
                <Banner />
                MarketPlace
                <div className='market-content'>
                    <Container>
                        <Row>
                            <Col xs={3}>
                                <div className='btn-group-market'>
                                    <div className='btn-group-search'>
                                        <ButtonPieces />
                                        <ButtonComplete />
                                    </div>
                                    <div className='btn-group'></div>
                                    <ButtonResetMarket />
                                </div>
                                <Search />
                                <div className='navbar-market'>
                                    {/* <ul style={{ padding: '0 5px 0 0' }}>
                                        <li>
                                            <span>Body Part</span>
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <span>Rarity</span>
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <span>Family</span>
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <span>Robot</span>
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <span>Stats</span>
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <span>Antiquity</span>
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </li>
                                    </ul> */}
                                    {renderNavMarket(navbar, openOrCloseNav, checkBox)}
                                </div>
                            </Col>
                            <Col>
                                <div className='market-list'>
                                    <div className='title-list'>
                                        Pieces list
                                    </div>
                                    <div className='market-sort'>
                                        <div className='market-sort-text'>
                                            Sort by
                                        </div>
                                        <div className='market-sort-select'>
                                            <SelectMarket sortList={sortList} selectOption={(e) => selectOption(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className='list-nft'>
                                    <HeroCard />
                                    <HeroCard />
                                    <HeroCard />
                                    <HeroCard />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
