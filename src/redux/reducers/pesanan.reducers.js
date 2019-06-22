import { SUCCESS_PESAN_MAKANAN, FAILED_PESAN_MAKANAN } from "../types";

const initialState = {
    error_pesanan: {},
    message_pesanan: '',
    success_pesanan: false
}

const pesananReducers = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_PESAN_MAKANAN:
            return {
                ...state,
                ...action.payload
            }
        case FAILED_PESAN_MAKANAN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default pesananReducers