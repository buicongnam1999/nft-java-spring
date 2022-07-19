import { Route } from "react-router-dom";
import Home from 'pages/home';
import Admin from 'pages/admin';
import User from 'layout/admin/user';
import Product from 'layout/admin/product';
import LoginHome from 'layout/home/login/LoginHome';
import HomePage from 'layout/home/HomePage';
import MarketPlace from 'layout/home/marketplace/MarketPlace';

export const routesPage = [
    {
        path: '/*',
        component: <Home />,
        route: Route,
        child: [
            {
                path: '',
                component: <Home />,
                route: Route
            }
        ]
    },
    {
        path: '/admin/*',
        component: <Admin />,
        route: Route,
        child: [
            {
                path: 'user',
                component: <User />,
                route: Route
            },
            {
                path: 'product',
                component: <Product />,
                route: Route
            }
        ]
    }
]

export const routesAdmin = [
    {
        path: '/',
        component: <Product />,
        route: Route
    },
    {
        path: '/user',
        component: <User />,
        route: Route
    },
    {
        path: '/product',
        component: <Product />,
        route: Route
    }
]

export const routesHome = [
    {
        path: '/',
        component: <HomePage />,
        route: Route
    },
    {
        path: '/login',
        component: <LoginHome />,
        route: Route
    },
    {
        path: '/market/*',
        component: <MarketPlace />,
        route: Route
    }
]

export const ToastAlert = [

]