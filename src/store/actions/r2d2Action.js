import {GET_R2D2, R2D2_ERROR} from '../types'
import axios from 'axios'

export const getR2D2 = () => async dispatch => {

    try{
        const res = await axios.get(`https://swapi.dev/api/people/3`)
        dispatch( {
            type: GET_R2D2,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: R2D2_ERROR,
            payload: console.log(e),
        })
    }

}