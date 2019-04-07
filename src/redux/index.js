import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(allReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)