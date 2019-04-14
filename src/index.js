import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {initAxios} from './utils/initAxios'
import {
    Provider
} from 'react-redux'

import './assets/scss/main.scss'
import { store } from './redux';

initAxios();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
