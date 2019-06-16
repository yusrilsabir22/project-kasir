import { SIGN_IN, AUTH_SUCCESS, CHECK_AUTH, GET_MENUS, ADD_MENU, ORDERS_MENUS, EDIT_TYPES, ADD_CUSTOMER, REMOVE_MENUS, EDIT_CUSTOMER } from "../types";

export const signIn = (payload) => {
    return {
        type: SIGN_IN,
        payload
    }
}

export const authSuccess = payload => {
    return {
        type: AUTH_SUCCESS,
        payload
    }
}

export const checkAuth = () => {
    return {
        type: CHECK_AUTH
    }
}

export const getAllMenu = () => {
    return {
        type: GET_MENUS
    }
}

export const addNewMenu = payload => {
    return {
        type: ADD_MENU,
        payload
    }
}

export const toggleNav = payload => {
    return {
        type: "TOGGLE_NAV",
        payload
    }
}

export const addCustomer = payload => {
    return {
        type: ADD_CUSTOMER,
        payload
    }
}

export const editOrders = payload => {
    return {
        type: EDIT_TYPES,
        payload
    }
}

export const addOrdersMenu = payload => {
    return {
        type: ORDERS_MENUS,
        payload
    }
}

export const removeMenus = (payload) => {
    return {
        type: REMOVE_MENUS,
        payload
    }
}

export const editCustomer = payload => {
    return {
        type: EDIT_CUSTOMER,
        payload
    }
}