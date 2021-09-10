import {GET_NOWPLAYING, NOWPLAYING_ERROR} from '../types'
const initialState = {
    nowPlaying:[],
    loading:true
}

export default function nowPlayingReducer(state = initialState, action){

    switch(action.type){

        case GET_NOWPLAYING:
        return {
            ...state,
            loading: false,
            list: action.payload,
        }
        case NOWPLAYING_ERROR:
            return{
                loading: false,
                error: action.payload
            }
        default: return state
    }

}