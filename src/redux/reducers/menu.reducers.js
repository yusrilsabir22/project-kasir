import {
    MENUS, MENU_NOTIFY
} from "../types";

const initialState = {
    menus: [],
    message: ''
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
        default:
            return state
    }
}

export default menuReducers