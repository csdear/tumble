import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getTrending} from '../store/actions/trendingAction'

const Trending = () => {
    const dispatch = useDispatch()
    const trendingList = useSelector(state => state.trending)
    console.log('trendingList', trendingList);
    const {loading, error, trending} = trendingList
    useEffect(() => {
        dispatch(getTrending())
        }, [dispatch])
    return (
        <>
            {loading ? "Loading..." : error ? error.message : trending.results.map(t => <h3>{t.name}</h3>)}
        </>
    )
}

export default Trending