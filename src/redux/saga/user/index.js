import {
    put,
    call,
    takeLatest
} from "redux-saga/effects";
import { auth } from "./user.api";
import { SIGN_IN, AUTH_SUCCESS, CHECK_AUTH } from "../../types";

function* login (action) {
    try {
        const {response} = yield call(auth, action.payload)
        yield put({type: AUTH_SUCCESS, payload: {auth: response.success}})
    } catch (error) {}
}

function* checkAuth (action) {
    try {
        if(localStorage.getItem('auth') === '1') {
            yield put({type: AUTH_SUCCESS, payload: {auth: true}})
        } else {
            yield put({type: AUTH_SUCCESS, payload: {auth: false}})
        }
    } catch (error) {}
}

export function* userSaga() {
    yield takeLatest(SIGN_IN, login)
    yield takeLatest(CHECK_AUTH, checkAuth)
}