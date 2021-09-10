import {GET_TOPRATED, TOPRATED_ERROR} from '../types'
import axios from 'axios'

export const getTopRated = () => async dispatch => {
    console.log('GET TOPRRATED ACTION CALLED');
    try{
        console.log('topRated action hit ');
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e8c08c56c215123455db90ff4f2ce7f4&language=en-US`)
        dispatch( {
            type: GET_TOPRATED,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: TOPRATED_ERROR,
            payload: error,
        })
    }

}