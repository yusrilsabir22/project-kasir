import {
    all,
    fork
} from 'redux-saga/effects'
import { userSaga } from './user';
import { menuSaga } from './menu';

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(menuSaga)
    ])
}