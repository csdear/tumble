import logo from './logo.svg';
import './App.css';
import Users from './component/users'
import MovieMain from './component/MovieMain'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState, useRef } from 'react';

function App() {
  console.log('@App()');

  const searchField = useRef(null)

  // let selection;

  const [state, setstate] = useState({
      filter:'',
      search: '',
  })


  const setMovieFilter = (filterBy) => {
    setstate({filter: filterBy});
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
      <div className="container"><h5>Search For A movie</h5>
      <form ref={searchField}>
	          <label>
	            <input type="text" name="searchField" />
	          </label>
            <Button onClick={setMovieSearch} variant="info">Search</Button>
	      	</form>
      </div>
      <MovieMain props={state} />
    </div>
  );
}

export default App;
