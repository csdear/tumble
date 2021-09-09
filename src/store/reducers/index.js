import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import trendingReducer from './trendingReducer'

export default combineReducers({
    usersList: userReducer,
    trendingList: trendingReducer,
})

