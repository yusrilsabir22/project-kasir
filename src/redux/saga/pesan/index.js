import {
    put,
    call,
    takeLatest
} from "redux-saga/effects";
import { pesanAPI, addCustomersAPI, getCustomerAPI, updateCustomersAPI, getPesananAPI } from "./pesanan.api";
import { SUCCESS_PESAN_MAKANAN, FAILED_PESAN_MAKANAN, PESAN_MAKANAN, ADD_CUSTOMER, CUSTOMER_STATUS, CUSTOMERS, GET_CUSTOMERS, MESSAGE_CUSTOMERS, UPDATE_CUSTOMERS, ORDERS_MENUS, GET_ALL_PESANAN, ALL_ORDERS } from "../../types";

function* PesanMakanan(action) {
    try {
        const {response, error} = yield call(pesanAPI, action.payload)
        if(response) {
            yield put({type: SUCCESS_PESAN_MAKANAN, payload: {...response}})
        }
        console.log(error)
        yield put({type: FAILED_PESAN_MAKANAN, payload: {...error.response.data}})
    } catch (error) {
        console.log(error)
    }
}

function* GetAllPesanan(action) {
    try {
        const {response, error} = yield call(getPesananAPI)
        if(response) {
            yield put({type: ORDERS_MENUS, payload: response})
        } else {
            console.log(error.response.data)
        }
    } catch (error) {console.log(error)}
}

function* AddCustomer(action) {
    try {
        const {response, error} = yield call(addCustomersAPI, action.payload)
        if(response) {
            console.log(response)
            yield put({type: CUSTOMER_STATUS, payload: {...response}})
        } else {
            console.log(error)
        }
    } catch (error) {}
}

function* GetCustomers(action) {
    try {
        const {response, error} = yield call(getCustomerAPI)
        if(response) {
            yield put({type: CUSTOMERS, payload: {...response}})
        } else {
            yield put({type: CUSTOMERS, payload: {...error.response.data}})
        }
    } catch (error) {}
}

function* UpdateCustomers(action) {
    try {
        const {response, error} = yield call(updateCustomersAPI, action.payload)
        if(response) {
            yield put({type: MESSAGE_CUSTOMERS, payload: {...response}})
        }
        yield put({type: MESSAGE_CUSTOMERS, payload: {...error.response.data}})
    } catch (error) {
        
    }
}

export function* pesananSaga() {
    yield takeLatest(PESAN_MAKANAN, PesanMakanan)
    yield takeLatest(GET_ALL_PESANAN, GetAllPesanan)
    yield takeLatest(ADD_CUSTOMER, AddCustomer)
    yield takeLatest(GET_CUSTOMERS, GetCustomers)
    yield takeLatest(UPDATE_CUSTOMERS, UpdateCustomers)
}