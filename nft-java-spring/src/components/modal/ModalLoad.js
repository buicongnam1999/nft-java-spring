import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './Modal.scss'

export default function ModalLoad(props) {
    const number = 7;
    return (
        <div className='modal-load'>
            <Modal
                show={props.showModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <div class="boxes">
                        <div class="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
