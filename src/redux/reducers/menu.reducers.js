import {
    MENUS, MENU_NOTIFY, ORDERS_MENUS, EDIT_TYPES, ADD_CUSTOMER, REMOVE_MENUS, EDIT_CUSTOMER
} from "../types";
import MenuOrders from "../../pages/menu";

const initialState = {
    menus: [],
    message: '',
    nav: false,
    orders: [],
    editOrders: false,
    dataOrders: {},
    menuOrder: []
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

        case ADD_CUSTOMER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case EDIT_CUSTOMER: 
            return {
                ...state,
                orders: action.payload
            }
        case ORDERS_MENUS:
            return {
                ...state,
                menuOrder: [...state.menuOrder, action.payload]
            }
        case REMOVE_MENUS:
            
            return {
                ...state,
                menuOrder: action.payload
            }
        default:
            return state
    }
}

export default menuReducers