import React, { useState } from 'react';
import ModalAccept from './ModalAccept';

const AacceptOffer = () => {
    const [showAcceptModal, setShowAcceptModal] = useState(false);

    return (
        <div>
            <button
                className="btn-accept-offer-modal"
                onClick={() => {
                    setShowAcceptModal(true);
                }}
            >
                Buy
            </button>
            {showAcceptModal && <ModalAccept closeModal={setShowAcceptModal} />}
        </div>
    );
};

export default AacceptOffer;
