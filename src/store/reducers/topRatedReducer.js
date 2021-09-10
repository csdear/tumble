import {GET_TOPRATED, TOPRATED_ERROR} from '../types'
const initialState = {
    topRated:[],
    loading:true
}

export default function topRatedReducer(state = initialState, action){

    switch(action.type){

        case GET_TOPRATED:
        return {
            ...state,
            loading: false,
            list: action.payload,
        }
        case TOPRATED_ERROR:
            return{
                loading: false,
                error: action.payload
            }
        default: return state
    }

}