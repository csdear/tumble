import {GET_R2D2} from '../types'
const initialState = {
    r2d2:[],
    loading:true
}

export default function r2d2Reducer(state = initialState, action){

    switch(action.type){

        case GET_R2D2:
        return {
            ...state,
            r2d2:action.payload,
            loading:false

        }
        default: return state
    }

}