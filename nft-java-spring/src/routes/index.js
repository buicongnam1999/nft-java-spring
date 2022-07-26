import React from 'react';
import {
    BrowserRouter
} from "react-router-dom";
import { routesPage } from 'constants/index';
import { renderRoutes } from 'ultis/helper';

export const IndexRouter = () => {
    return (
        <div>
            <BrowserRouter>
                {renderRoutes(routesPage)}
            </BrowserRouter>
        </div>
    )
}
