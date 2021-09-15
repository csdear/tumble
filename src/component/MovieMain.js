import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getTrending} from '../store/actions/trendingAction'
import {getTopRated} from '../store/actions/topRatedAction'
import {getNowPlaying} from '../store/actions/nowPlayingAction'
import {getPopular} from '../store/actions/popularAction'
// import {searchMovies} from '../store/actions/searchAction'
import './styles/MovieMain.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





const MovieMain = (props) => {
    console.log('@MovieMain');
    console.log('PROPS',props);
    const filter = props.props.filter;
    const search = props.props.search;
    console.log('SELECTION filter',filter)
    console.log('SELECTION search',search)
    const dispatch = useDispatch()
    const trendingList = useSelector(state => state.trendingList)
    const topRatedList = useSelector(state => state.topRatedList)
    const nowPlayingList = useSelector(state => state.nowPlayingList)
    const popularList = useSelector(state => state.popularList)
    const movieList = useSelector(state => state.movieList)

    



    let loading;
    let error;
    let list;

    // init trending.
    loading = trendingList.loading;
    error = trendingList.error;
    list = trendingList.list;


    console.log('Current Filter selection', filter);
    switch (filter) {
        case 'trending':
          loading = trendingList.loading;
          error = trendingList.error;
          list = trendingList.list;
          break;
        case 'topRated':
          loading = topRatedList.loading;
          error = topRatedList.error;
          list = topRatedList.list;
          break;
        case 'nowPlaying':
          console.log('case now playing');
          loading = nowPlayingList.loading;
          error = nowPlayingList.error;
          list = nowPlayingList.list;
          break;
        case 'popular':
          console.log('case popular');
          loading = popularList.loading;
          error = popularList.error;
          list = popularList.list;
          break;
        // case undefined:
        //   console.log('case undefined');
        //   dispatch(searchMovies(search));
        //   loading = movieList.loading;
        //   error = movieList.error;
        //   list = movieList.list;
        //   break;
        default:
            console.log('case default');
            loading = trendingList.loading;
            error = trendingList.error;
            list = trendingList.list;
      }

      if (search) {
        console.log('|WE SEARCH|');
        console.log('search Exists');
        console.log('search is for : ', search);
        // dispatch(searchMovies(search));  //WORKS BUT INFINITE LOOP.
        // loading = movieList.loading;
        // error = movieList.error;
        // list = movieList.list;
      }


    //  useEffect(() => {
    //      dispatch(searchMovies(search))
    //     }, [dispatch])
    useEffect(() => {
        dispatch(getTrending())
        }, [dispatch])
    useEffect(() => {
        dispatch(getTopRated())
        }, [dispatch])
    useEffect(() => {
        dispatch(getNowPlaying())
        }, [dispatch])
    useEffect(() => {
        dispatch(getPopular())
        }, [dispatch])
    
    const truncate = (str) => {
      return str.length > 90 ? str.substring(0, 150) + "..." : str;
    }

    return (
        <>
            {loading ? "Loading..." : error ? error.message :
                <div className="trd container-flex">
                <div className='col-lg-12'>
                <div className='row'>
                {list.results.map(t =>
                    <div className='col-sm-6 col-md-4 col-sm-4' key={t.id}>
                        <Card style={{ width: '24rem' }}>
                        <Card.Img variant="top" src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + t.poster_path} />
                        <Card.Body>
                          <Card.Title>{t.name ? t.name : t.original_title}</Card.Title>
                          <Card.Text>
                            {truncate(t.overview)}
                          </Card.Text>
                          <Button variant="primary">DETAILS</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    )}
                </div>
                </div>
                </div>
            }
        </>
    )
}

export default MovieMain