import React, { useState, useEffect } from 'react'
import './HeaderHome.scss'
import Logo from 'assets/images/logo/logo-footer.png';
import ButtonDanger from 'components/buttons/ButtonDanger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function Header(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(localStorage.getItem['user'])
    }, [user])

    return (
        <div className='header'>
            <div className='header-content'>
                <Container>
                    <Row>
                        <Col className='header-left'>
                            <div className='logo'>
                                <img src={Logo} alt='' />
                            </div>
                        </Col>
                        <Col className='header-right'>
                            <div className='navbar'>
                                <ul>
                                    <li>
                                        <Link to="/">{props.t('Home')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/market">{props.t('Market')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/market">{props.t('Blog')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/market">{props.t('Contact Us')}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='user'>
                                {
                                    user !== undefined ?
                                        <div className=''>
                                            <div className='logo-user'>
                                                <img src='' alt='' />
                                            </div>
                                            <div className='info-user'>
                                                <span>
                                                    {user}
                                                </span>
                                            </div>
                                        </div> :
                                        <div className='login'>
                                            <ButtonDanger onClick={() => { }}>{props.t('Sign In')}</ButtonDanger>
                                        </div>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
