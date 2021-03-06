import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import trendingReducer from './trendingReducer'
import topRatedReducer from './topRatedReducer'
import nowPlayingReducer from './nowPlayingReducer'
import popularReducer from './popularReducer'
import movieSearchReducer from './movieSearchReducer'

export default combineReducers({
    usersList: userReducer,
    trendingList: trendingReducer,
    topRatedList: topRatedReducer,
    nowPlayingList: nowPlayingReducer,
    popularList: popularReducer,
    movieList: movieSearchReducer,
})

