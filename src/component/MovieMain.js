import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getTrending} from '../store/actions/trendingAction'
import {getTopRated} from '../store/actions/topRatedAction'
import {getNowPlaying} from '../store/actions/nowPlayingAction'
import {getPopular} from '../store/actions/popularAction'
import './styles/MovieMain.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MovieMain = (props) => {
    console.log('@MovieMain');
    console.log('PROPS',props);
    const selection = props.selection;
    const dispatch = useDispatch()
    const trendingList = useSelector(state => state.trendingList)
    const topRatedList = useSelector(state => state.topRatedList)
    const nowPlayingList = useSelector(state => state.nowPlayingList)
    const popularList = useSelector(state => state.popularList)


    let loading;
    let error;
    let list;

    console.log('current selection', selection);
    switch (selection) {
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
        default:
            loading = trendingList.loading;
            error = trendingList.error;
            list = trendingList.list;
      }

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
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
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