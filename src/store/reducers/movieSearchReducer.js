import {GET_MOVIE, GET_MOVIE_ERROR} from '../types'
const initialState = {
    movie:[],
    loading:true
}

export default function movieReducer(state = initialState, action){

    switch(action.type){

        case GET_MOVIE:
        return {
            ...state,
            loading: false,
            list: action.payload,
        }
        case GET_MOVIE_ERROR:
            return{
                loading: false,
                error: action.payload
            }
        default: return state
    }

}