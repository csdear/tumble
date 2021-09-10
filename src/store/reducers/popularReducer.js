import {GET_POPULAR, POPULAR_ERROR} from '../types'
const initialState = {
    popular:[],
    loading:true
}

export default function popularReducer(state = initialState, action){

    switch(action.type){

        case GET_POPULAR:
        return {
            ...state,
            loading: false,
            list: action.payload,
        }
        case POPULAR_ERROR:
            return{
                loading: false,
                error: action.payload
            }
        default: return state
    }

}