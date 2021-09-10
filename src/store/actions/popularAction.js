import {GET_POPULAR, POPULAR_ERROR} from '../types'
import axios from 'axios'

export const getPopular = () => async dispatch => {
    console.log('GET POPULAR ACTION CALLED');
    try{
        console.log('popular action hit ');
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e8c08c56c215123455db90ff4f2ce7f4&language=en-US`)
        dispatch( {
            type: GET_POPULAR,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: POPULAR_ERROR,
            payload: error,
        })
    }

}