import {GET_TRENDING, TRENDING_ERROR} from '../types'
const initialState = {
    trending:[],
    loading:true
}

export default function trendingReducer(state = initialState, action){

    switch(action.type){

        case GET_TRENDING:
        return {
            ...state,
            loading: false,
            trending: action.payload,
        }
        case TRENDING_ERROR:
            return{
                loading: false,
                error: action.payload
            }
        default: return state
    }

}