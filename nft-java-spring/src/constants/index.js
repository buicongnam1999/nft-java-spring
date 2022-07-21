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

export const sortList = [
    {
        type: 1,
        name: "Last Listed"
    },
    {
        type: 2,
        name: "New Listed"
    },
    {
        type: 3,
        name: "Lowest Price"
    },
    {
        type: 4,
        name: "Hightest Price"
    }
]

export const navbarMarket = [
    {
        name: "Body Part",
        active: false,
    },
    {
        name: "Rarity",
        active: false,
    },
    {
        name: "Family",
        active: false,
    },
    {
        name: "Robot",
        active: false,
    },
    {
        name: "Stats",
        active: false,
    },
    {
        name: "Antiquity",
        active: false,
    }
]