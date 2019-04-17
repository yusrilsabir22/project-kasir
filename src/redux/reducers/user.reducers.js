import { AUTH_SUCCESS } from "../types";

const initialState = {
    auth: false,
    admin: false,
    messageUser: '',
    status: 401
}

const userReducers = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_SUCCESS:
        return {
            ...state,
            ...action.payload
        }
        default:
        return state
    }
}

export default userReducers