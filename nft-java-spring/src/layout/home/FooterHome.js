import React from 'react';
import './FooterHome.scss';
import Logo from 'assets/images/logo/logo-footer.png';
import LogoInstagram from 'assets/images/logo/logo-instagram.png';
import victory from 'assets/images/logo/victory.png';

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
          </div>
      </footer>
  )
}
