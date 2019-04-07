import { SIGN_IN, AUTH_SUCCESS, CHECK_AUTH } from "../types";

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