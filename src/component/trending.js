import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getTrending} from '../store/actions/trendingAction'
import './styles/trending.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
                <div className="trd container">
                    {trending.results.map(t =>
                    <div key={t.id}>
                        {/*<h4>{t.name ? t.name : t.original_title}</h4>
                        <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + t.poster_path} alt='test' />
                        <small>id:{t.id}</small>
                        <Button variant="primary">Primary</Button>{' '}
                        */}
                        <div className="row">
                        <Card style={{ width: '18rem' }}>
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

                    </div>
                    )}
                </div>
            }
        </>
    )
}

export default Trending