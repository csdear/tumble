import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import trendingReducer from './trendingReducer'
import topRatedReducer from './topRatedReducer'

export default combineReducers({
    usersList: userReducer,
    trendingList: trendingReducer,
    topRatedList: topRatedReducer,
})

