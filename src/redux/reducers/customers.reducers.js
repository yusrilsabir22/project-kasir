import {
    CUSTOMERS, MESSAGE_CUSTOMERS
} from "../types";

const initialState = {
    message: '',
    customers: [],
    success: false,
    success_update: false,
    success_pelanggan: false
}

const customersReducers = (state = initialState, action) => {
    switch (action.type) {
        case CUSTOMERS:
            return {
                ...state,
                ...action.payload
            }
        case MESSAGE_CUSTOMERS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default customersReducers