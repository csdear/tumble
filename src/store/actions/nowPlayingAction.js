import {GET_NOWPLAYING, NOWPLAYING_ERROR} from '../types'
import axios from 'axios'

export const getNowPlaying = () => async dispatch => {
    console.log('GET NOWPLAYING ACTION CALLED');
    try{
        console.log('nowPlaying action hit ');
        const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=e8c08c56c215123455db90ff4f2ce7f4&language=en-US`)
        dispatch( {
            type: GET_NOWPLAYING,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: NOWPLAYING_ERROR,
            payload: error,
        })
    }

}