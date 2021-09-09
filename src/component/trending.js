import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getTrending} from '../store/actions/trendingAction'
import './styles/trending.css';

const Trending = () => {
    const dispatch = useDispatch()
    const trendingList = useSelector(state => state.trendingList)
    console.log('trendingList', trendingList);
    // const blah = "HAAAAAAY";
    const {loading, error, trending} = trendingList;
    useEffect(() => {
        dispatch(getTrending())
        }, [dispatch])
    return (
        <>
            {loading ? "Loading..." : error ? error.message :
                <div className="trd">
                    {trending.results.map(t =>
                    <div key={t.id}>
                        <h4>{t.name ? t.name : t.original_title}</h4>
                        <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + t.poster_path} alt='test' />
                        <small>id:{t.id}</small>
                    </div>
                    )}
                </div>
            }
        </>
    )
}

export default Trending