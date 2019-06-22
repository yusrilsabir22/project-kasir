import { combineReducers } from 'redux'
import userReducers from './user.reducers'
import menuReducers from './menu.reducers'
import customersReducers from './customers.reducers'
import pesananReducers from './pesanan.reducers'
const allReducers = combineReducers({
    userReducers,
    menuReducers,
    pesananReducers,
    customersReducers
})

export default allReducers