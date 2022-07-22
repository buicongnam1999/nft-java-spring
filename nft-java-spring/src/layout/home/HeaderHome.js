import React, { useState, useEffect } from 'react'
import './HeaderHome.scss'
import Logo from 'assets/images/logo/logo-footer.png';
import ButtonDanger from 'components/home/buttons/ButtonDanger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from 'assets/images/icon/menu.png'

export default function Header(props) {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const navbarArr = [
        {
            name: "Home",
            path: "/",
            value: props.t('Home'),
            active: true
        },
        {
            name: "Market",
            path: "/market",
            value: props.t('Market'),
            active: false
        },
        {
            name: "Blog",
            path: "/blog",
            value: props.t('Blog'),
            active: false
        },
        {
            name: "Contact Us",
            path: "/contact",
            value: props.t('Contact Us'),
            active: false
        },
    ]
    const [navbar, setNavbar] = useState(navbarArr);
    useEffect(() => {
        setUser(localStorage.getItem['user'])
    }, [user])

    useEffect(() => {
        function loadLocation() {
            if (location) {
                // setCurrentPath(location.pathname);
                // if (currentPath) {
                const newState = navbarArr.map(e => {
                    if (e.path === location.pathname) {
                        return { ...e, active: true }
                    } else {
                        return { ...e, active: false }
                    }
                });
                setNavbar(newState);
                // }
            }
        }

        return () => {
            loadLocation();
        }
    }, [])

    const changeLocation = (name) => {
        if (name) {
            const newState = navbarArr.map(e => {
                if (e.name === name) {
                    return { ...e, active: true }
                } else {
                    return { ...e, active: false }
                }
            });
            setNavbar(newState);
        }
    }

    const renderNav = (params) => {
        let navbar = <ul>
            {
                params && params.map((param) =>
                    param.active ?
                        <li className="active" key={param.path} onClick={() => changeLocation(param.name)}>
                            <Link to={param.path}
                                onClick={() => changeLocation(param.name)}
                            >{param.value}</Link>
                        </li> :
                        <li key={param.path} onClick={() => changeLocation(param.name)}>
                            <Link to={param.path} onClick={() => changeLocation(param.name)}>{param.value}</Link>
                        </li>
                )
            }
        </ul>

        return navbar;
    }

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
                                {/* <ul>
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
                                </ul> */}
                                { renderNav(navbar) }
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
                            <div className='navbar-icon'>
                                <img src={MenuIcon} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
