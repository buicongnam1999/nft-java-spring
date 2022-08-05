import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './Modal.scss'

export default function ModalLoad(props) {
    return (
        <div className='modal-load'>
            <Modal
                show={props.showModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <div className="boxes">
                        <div className="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="box">
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
