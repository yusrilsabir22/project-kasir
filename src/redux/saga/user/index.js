import {
    put,
    call,
    takeLatest
} from "redux-saga/effects";
import { auth } from "./user.api";
import { SIGN_IN, AUTH_SUCCESS, CHECK_AUTH } from "../../types";

function* login (action) {
    try {
        const {response, error} = yield call(auth, action.payload)
        if(response) {
            localStorage.setItem('id', response.id)
            localStorage.setItem('token', response.token)
            localStorage.setItem('nama', response.nama)
            if(response.nama === 'admin') {
                yield put({
                    type: AUTH_SUCCESS,
                    payload: {
                        auth: true,
                        admin: true,
                        ...response
                    }
                })
            }
            yield put({type: AUTH_SUCCESS, payload: {auth: true, ...response}})
        }
        
        yield put({type: AUTH_SUCCESS, payload: {...error.response.data}})
    } catch (error) {}
}

function* checkAuth (action) {
    try {
        if(!!localStorage.getItem('token')) {
            if(localStorage.getItem('nama') === 'admin') {
                yield put({type: AUTH_SUCCESS, payload: {auth: true, admin: true}})
            } else {
                yield put({type: AUTH_SUCCESS, payload: {auth: true, admin: false}})
            }
        } else {
            yield put({type: AUTH_SUCCESS, payload: {auth: false}})
        }
    } catch (error) {}
}

export function* userSaga() {
    yield takeLatest(SIGN_IN, login)
    yield takeLatest(CHECK_AUTH, checkAuth)
}