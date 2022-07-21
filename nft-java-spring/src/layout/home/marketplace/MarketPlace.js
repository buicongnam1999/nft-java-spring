import React, { useState } from 'react';
import Banner from 'components/home/marketplace/Banner';
import './MarketPlace.scss'
import Search from 'components/home/marketplace/left/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonPieces from 'components/buttons/ButtonPieces';
import ButtonComplete from 'components/buttons/ButtonComplete';
import SelectMarket from 'components/selects/SelectMarket';
import ButtonResetMarket from 'components/buttons/ButtonResetMarket';
import { sortList, navbarMarket } from 'constants/index';
import { renderNavMarket } from 'ultis/helper';

export default function MarketPlace() {
    const [defaultSelect, setDefaultSelect] = useState(0);

    const selectOption = (value) => {
        setDefaultSelect(value);
    }
    return (
        <>
            <div className='market'>
                <Banner />
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
                                    {renderNavMarket(navbarMarket)}
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

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
