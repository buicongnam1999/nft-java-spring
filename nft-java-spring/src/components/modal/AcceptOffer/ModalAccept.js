import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Hero from '../../../assets/images/icon/MedaCoinIcon-3.svg';
import './ModalAccept.scss';

const ModalAccept = (props) => {
    const [acceptStatus, setAcceptStatus] = useState(false);

    const handleAcceptClick = () => {
        props.closeModal(false);
    };

    return (
        <div className="modal-wrapper">
            <div className="modal-background" onClick={() => handleAcceptClick()}></div>
            <div className="modal-container">
                <div className="modal-inner">
                    <header className="modal-header">
                        <h3 className="modal-header__text">
                            {acceptStatus ? 'YOUR SALE IS PROCESSING!' : 'ACCEPT THIS OFFER'}
                        </h3>
                        <button className="modal-header__icon" onClick={() => handleAcceptClick()}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </header>
                    <div className={acceptStatus ? 'modal-content--accept' : 'modal-content'}>
                        <div className={acceptStatus ? 'modal-top-content--accept' : 'modal-top-content'}>
                            {acceptStatus ? (
                                <div className="modal-top-content__title--accept">
                                    <h4 className="modal-top-content__title-name--accept">
                                        You just sold. Must be confirmed on the shorty blockchain
                                    </h4>
                                </div>
                            ) : (
                                <div className="modal-top-content__title">
                                    <h4 className="modal-top-content__title-name">Item</h4>
                                    <h4 className="modal-top-content__title-name">Subtotal</h4>
                                </div>
                            )}

                            {acceptStatus ? (
                                <div className="modal-top-content__card--accept">
                                    <div className="modal-top-content__card-left-img--accept"></div>
                                </div>
                            ) : (
                                <div className="modal-top-content__card">
                                    <div className="modal-top-content__card-left">
                                        <div className="modal-top-content__card-left-img"></div>
                                        <div className="modal-top-content__card-left-info">
                                            <span className="modal-top-content__card-left-info__name">
                                                ROBOT GEISHA
                                            </span>
                                            <span className="modal-top-content__card-left-info__code">
                                                Piece #135367
                                            </span>
                                        </div>
                                    </div>
                                    <div className="modal-top-content__card-right">
                                        <div className="modal-top-content__card-right-top">
                                            <img src={Hero} alt="icon" />
                                            <span>0.711</span>
                                        </div>
                                        <div className="modal-top-content__card-right-bottom">
                                            <span>$2868.51]</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {acceptStatus ? (
                            <></>
                        ) : (
                            <div className="modal-bottom-content">
                                <div className="modal-bottom-content__fee">
                                    <span className="modal-bottom-content__fee-name">Metabots Fee</span>
                                    <span className="modal-bottom-content__fee-percent">2.5%</span>
                                </div>
                                <div className="modal-bottom-content__total">TOTAL EARNINGS</div>
                            </div>
                        )}
                    </div>
                    {acceptStatus ? (
                        <div className="modal-footer--accept">
                            <div className="modal-footer-content__fee">
                                <span className="modal-footer-content__fee-name">STATUS</span>
                                <span className="modal-footer-content__fee-percent">Transaction Hash</span>
                            </div>

                            <div className="modal-footer__info--accept">
                                <div className="modal-footer__info-left">
                                    <div className="lds-spinner">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <span>Processing</span>
                                </div>
                                <div className="modal-footer__info-right">
                                    <span className="modal-footer__info-right__price">
                                        0x6EC1034edEc43D7B4658ccCc066059409Abd965F
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="modal-footer">
                            <div className="modal-footer__info">
                                <div className="modal-footer__info-left">
                                    <img src={Hero} alt="icon" />
                                    <span>MON</span>
                                </div>
                                <div className="modal-footer__info-right">
                                    <span className="modal-footer__info-right__price">00.00</span>
                                    <span className="modal-footer__info-right__price-2">[$00]</span>
                                </div>
                            </div>
                            <div className="modal-footer__accept">
                                <button className="modal-footer__accept-btn" onClick={() => setAcceptStatus(true)}>
                                    ACCEPT
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModalAccept;
