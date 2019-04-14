import { combineReducers } from 'redux'
import userReducers from './user.reducers'
import menuReducers from './menu.reducers'
const allReducers = combineReducers({
    userReducers,
    menuReducers
})

export default allReducers