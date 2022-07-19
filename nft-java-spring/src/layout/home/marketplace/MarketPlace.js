import React from 'react';
import Banner from 'components/home/marketplace/Banner';
import './MarketPlace.scss'
import Search from 'components/home/marketplace/left/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MarketPlace() {
    return (
        <>
            <div className='market'>
                <Banner />
                <Container>
                    <Row>
                        <Col xs={5}>
                            <Search />
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
