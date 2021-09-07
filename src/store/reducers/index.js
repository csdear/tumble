import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import r2d2Reducer from './r2d2Reducer'

export default combineReducers({
    users: userReducer,
    r2d2: r2d2Reducer
})