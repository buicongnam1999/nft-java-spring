import React from 'react';
import {
    BrowserRouter
} from "react-router-dom";
import { routesPage } from 'constants/index';
import { renderRoutes } from 'ultis/helper';

export const IndexRouter = () => {
    return (
        <BrowserRouter>
            {renderRoutes(routesPage)}
        </BrowserRouter>
    )
}
