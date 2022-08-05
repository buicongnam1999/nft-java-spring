import React, { useState } from 'react';
import { routesHome } from 'constants/index';
import { renderRoutes } from 'ultis/helper'
import Header from 'layout/home/HeaderHome';
import Footer from 'layout/home/FooterHome';
import { useTranslation } from 'react-i18next';
import ToastALert from 'components/toasts/ToastALert';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function Home() {
    const { t , i18n } = useTranslation();
    const [show, setShow] = useState(true);
    const [popups, setPopups] = useState(0);
    const fakeArray = Array(popups).fill();
    const toastFactory = () => <ToastALert onCloseToast={() => setShow(false)} show={show} variant="Dark" time="11s" body="abc" header="bootstrap"/>;

    return (
        <div>
            <Header t={t} i18n={i18n} />
            { renderRoutes(routesHome) }
            <ToastContainer 
              position="bottom-end"
            >
                {fakeArray.map(toastFactory)}
            </ToastContainer>
            <Footer />
        </div>
    )
}

