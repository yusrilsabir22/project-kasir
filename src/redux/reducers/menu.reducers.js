import {
    MENUS, MENU_NOTIFY, ORDERS_MENUS, EDIT_TYPES, REMOVE_MENUS, EDIT_CUSTOMER, CUSTOMER_STATUS, ALL_ORDERS, EDIT_MENU
} from "../types";

const initialState = {
    menus: [],
    message: '',
    nav: false,
    orders: [],
    editOrders: false,
    dataOrders: {},
    menuOrder: [],
    editedMenu: false,
    editMenu: {},
    success_send_menu: false
}

const menuReducers = (state = initialState, action) => {
    switch (action.type) {
        case MENUS:
            return {
                ...state,
                ...action.payload
            }
        case MENU_NOTIFY:
            return {
                ...state,
                ...action.payload
            }
        case "TOGGLE_NAV":
            return {
                ...state,
                nav: action.payload
            }
        case EDIT_TYPES:
            return {
                ...state,
                editOrders: action.payload.edited,
                dataOrders: action.payload.data
            }

        case CUSTOMER_STATUS:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case EDIT_CUSTOMER: 
            return {
                ...state,
                orders: action.payload
            }
        case ALL_ORDERS:
            return {
                ...state,
                menuOrder: [...state.menuOrder, action.payload]
            }
        case ORDERS_MENUS:
            return {
                ...state,
                menuOrder: action.payload.records
            }
        case REMOVE_MENUS:
            return {
                ...state,
                menuOrder: action.payload
            }
        case EDIT_MENU:
            return {
                ...state,
                editedMenu: action.payload.onEditMenu,
                editMenu: action.payload.editMenu
            }
        default:
            return state
    }
}

export default menuReducers