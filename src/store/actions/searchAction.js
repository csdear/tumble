import {GET_MOVIE, GET_MOVIE_ERROR} from '../types'
import axios from 'axios'

export const searchMovies = (search) => async dispatch => {
    console.log('search movies ACTION CALLED', search);
    // let stub = 'fight';
    try{
        console.log('search movies action hit ');
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e8c08c56c215123455db90ff4f2ce7f4&language=en-US&page=1&query=${search}`)
        dispatch( {
            type: GET_MOVIE,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: GET_MOVIE_ERROR,
            payload: error,
        })
    }

}