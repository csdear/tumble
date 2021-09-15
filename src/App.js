import logo from './logo.svg';
import './App.css';
import Users from './component/users'
import MovieMain from './component/MovieMain'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState, useRef } from 'react';
import Search from './component/Search'
import Movie from './component/Movie';
import axios from 'axios'

function App() {
  console.log('@App()');
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showArea, setShowArea] = useState(true);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const search = async searchValue => {
    console.log('HIT SEARCH function');
    setLoading(true);
    setErrorMessage(null);
    setShowSearchResults(true);
    setShowArea(false);

    try {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e8c08c56c215123455db90ff4f2ce7f4&language=en-US&page=1&query=${searchValue}`)
    .then(response => {
      console.log('AXIOS RESPONSE', response);
      setMovies(response.data.results);
      setLoading(false);
      });
    }
    catch(error){
      setErrorMessage(error);
      setLoading(false);

    }
    }

  const searchField = useRef(null)

  // let selection;

  const [state, setstate] = useState({
      filter:'',
      search: '',
  })


  const setMovieFilter = (filterBy) => {
    setstate({filter: filterBy});
    setShowArea(true);
    setShowSearchResults(false);
  }

  const setMovieSearch = () => {
    const form = searchField.current
    // alert(`${form['searchField'].value}`)
    setstate({search: form['searchField'].value});
    // console.log('AAA', state.searchString);
  }


  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Tumble</h1>
      </header>
      <Button onClick={() => {setMovieFilter('trending');}} variant="warning">Trending</Button>
      <Button onClick={() => {setMovieFilter('topRated');}} variant="danger">Top Rated</Button>
      <Button onClick={() => {setMovieFilter('nowPlaying');}} variant="success">Now Playing</Button>
      <Button onClick={() => {setMovieFilter('popular');}} variant="info">Popular</Button>
      <div className="container"><h5>OR Search For A movie</h5>

      </div>
      <Search search={search} />

      {showSearchResults ?
      <div className="container-flex m-5">
      <div className='col-lg-12'>
      <div className='row'>
        {loading && !errorMessage ? (
         <span></span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
      </div>
      </div>
      : null}
      {showArea ? <MovieMain props={state} /> : null}
    </div>
  );
}

export default App;
