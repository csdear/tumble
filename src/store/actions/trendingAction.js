import {GET_TRENDING, TRENDING_ERROR} from '../types'
import axios from 'axios'

export const getTrending = () => async dispatch => {
    console.log('GET TRENDING ACTION CALLED');
    try{
        console.log('trending action hit ');
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=e8c08c56c215123455db90ff4f2ce7f4&language=en-US`)
        dispatch( {
            type: GET_TRENDING,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: TRENDING_ERROR,
            payload: error,
        })
    }

}