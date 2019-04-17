import { AUTH_SUCCESS, AUTH_FAILED } from "../types";

const initialState = {
    auth: false,
    admin: false,
    messageUser: '',
    message: '',
    status: 401
}

const userReducers = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_SUCCESS:
        return {
            ...state,
            ...action.payload
        }
        case AUTH_FAILED:
        return {
            ...state,
            messageUser: action.payload.message
        }
        default:
        return state
    }
}

export default userReducers