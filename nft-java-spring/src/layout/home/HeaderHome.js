import React, { useState, useEffect } from 'react'
import './HeaderHome.scss'
import ButtonDanger from 'components/home/buttons/ButtonDanger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from 'assets/images/icon/menu-icon.png';
import MedaCoinLogo from 'assets/images/logo/MedaCoinLogo.png';

export default function Header(props) {
    const location = useLocation();
    const [user, setUser] = useState(null);
    // const [currentPath, setCurrentPath] = useState(location.pathname);
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
            name: "Medatmon",
            path: "/medatmon",
            value: props.t('Medamon&Mon'),
            active: false
        },
        {
            name: "Profile",
            path: "/profile",
            value: props.t('Profile'),
            active: false
        },
    ]
    const [navbar, setNavbar] = useState(navbarArr)

    useEffect(() => {
        setUser(localStorage.getItem['user'])
    }, [user]);

    useEffect(() => {
        function loadLocation() {
            if (location) {
                let pathArr = location.pathname.split("/");
                pathArr[1] = pathArr[1] === ''? 'home' : pathArr[1];
                const newState = navbarArr.map((e) => {
                    if (e.name.toLowerCase() === pathArr[1]) {
                        return { ...e, active: true }
                    } else {
                        return { ...e, active: false }
                    }
                });
                setNavbar(newState);
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
        return <ul>
            {
                params && params.map((param) =>
                    param.active ?
                        <li className="active" key={param.path}>
                            <Link to={param.path}
                                onClick={() => changeLocation(param.name)}
                            >{param.value}</Link>
                        </li> :
                        <li key={param.path}>
                            <Link to={param.path} onClick={() => changeLocation(param.name)}>{param.value}</Link>
                        </li>
                )
            }
        </ul>
    }

    return (
        <div className='header'>
            <div className='header-content'>
                <Container>
                    <Row>
                        <Col className='header-left'>
                            <div className='logo'>
                                <span><img src={MedaCoinLogo} alt='' /></span>
                                <span className='header-left-name'>MEDABOTS</span>
                            </div>
                        </Col>
                        <Col className='header-right'>
                            <div className='navbar'>
                                {renderNav(navbar)}
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
