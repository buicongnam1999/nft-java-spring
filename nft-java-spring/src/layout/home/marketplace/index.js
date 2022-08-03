import React from 'react';
import { Route, Routes } from "react-router-dom";
import MarketPlace from './MarketPlace';
import NftDetail from './NftDetail';

export default function IndexMarket() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<MarketPlace />} />
                <Route path='/nft-detail/:id' element={<NftDetail />} />
            </Routes>
        </>
    )
}
