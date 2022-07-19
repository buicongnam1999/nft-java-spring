import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route>

                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}
