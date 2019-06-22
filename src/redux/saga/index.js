import {
    all,
    fork
} from 'redux-saga/effects'
import { userSaga } from './user';
import { menuSaga } from './menu';
import {pesananSaga} from './pesan'

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(menuSaga),
        fork(pesananSaga)
    ])
}