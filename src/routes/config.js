import React from 'react'
import {
    Route
} from 'react-router-dom'
import TableOrders from "../pages/table_order";
import OrderStatus from "../pages/order_status";
import MenuOrders from "../pages/menu";
import LoginPage from '../pages/login';
import { checkAuthenticated } from '../utils/auth';

const routes = [
    {
        path: '/',
        component: checkAuthenticated(OrderStatus),
        exact: true
    },
    {
        path: '/makanan',
        component: checkAuthenticated(MenuOrders),
        exact: true
    },
    {
        path: '/pelanggan',
        component: checkAuthenticated(OrderStatus),
    },
    {
        path: '/login',
        component: LoginPage
    }
]

const MRoutes = (route) => {

    return (
        <React.Fragment>
        <Route
            exact={route ? route.exact : false}
            path={route.path}
            render={props => {
                return (
                    <route.component 
                    {...props}
                        {...route}
                        {...route.props}
                        routes={route.routes}
                    />
                )
            }}
        />
        </React.Fragment>
    )
}

export {
    routes,
    MRoutes
}