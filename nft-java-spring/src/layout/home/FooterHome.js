import React from 'react';
import './FooterHome.scss';
import Logo from 'assets/images/logo/logo-footer.png';
import LogoInstagram from 'assets/images/logo/logo-instagram.png';
import victory from 'assets/images/logo/victory.png';
import MedaCoinIcon from 'assets/images/icon/MedaCoinIcon.png';
import Reddit from 'assets/images/icon/Reddit.png';
import Twitter from 'assets/images/icon/Twitter.svg';
import Discord from 'assets/images/icon/Discord.svg';
import Youtube from 'assets/images/icon/Youtube.png';
import Telegram from 'assets/images/icon/Telegram.png';
import Twitch from 'assets/images/icon/twitch-1 1.svg';
import Instagram from 'assets/images/icon/Instagram.svg';

export default function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className='logo'>
                    <img src={Logo} alt='' />
                </div>
                <div className='footer-text'>
                    <div className='footer-title'>
                        <h2>50+ Free Footers!</h2>
                    </div>
                    <div className='footer-content'>
                        <div className='footer-content-text'>
                            As a design agency, we’ve made TONS of websites over the yers. A good footer can be a work of art that actually increases conversion and improves usability. We just wanted to make your life a little easier when thinking about your next footer.
                            Also check us out on Instagram!
                        </div>
                        <div className='footer-content-instagram'>
                            <div className=''>
                                Follow us on <b>INSTAGRAM</b>
                            </div>
                            <div className='logo-instagram'>
                                <img src={LogoInstagram} alt='' />
                            </div>
                            <div className='logo-hand'>
                                <img src={victory} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-team'>
                    <div className='coin-icon'>
                        <img src={MedaCoinIcon} alt='' />
                    </div>
                    <div className='footer-team-info'>
                        <ul>
                            <li>
                                Teem & Conditions
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                FAQ
                            </li>
                            <li>
                                Whitepaper
                            </li>
                            <li>
                                Team
                            </li>
                        </ul>
                    </div>
                    <div className='footer-team-network'>
                        <div className='network-element'>
                            <img src={Reddit} alt='' />
                        </div>
                        <div className='network-element'>
                            <img src={Twitter} alt='' />
                        </div>
                        <div className='network-element'>
                            <img src={Discord} alt='' />
                        </div>
                        <div className='network-element'>
                            <img src={Youtube} alt='' />
                        </div>
                        <div className='network-element'>
                            <img src={Telegram} alt='' />
                        </div>
                        <div className='network-element'>
                            <img src={Twitch} alt='' />
                        </div>
                        <div className='network-element'>
                            <img src={Instagram} alt='' />
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <div className='footer-copyright-text'>
                        <span>Copyright</span> <i className="fa-solid fa-copyright"></i> <span>2022 Medabost. All right reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
