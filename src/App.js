import logo from './logo.svg';
import './App.css';
import Users from './component/users'
import MovieMain from './component/MovieMain'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function App() {
  console.log('@App()');

  // let selection;

  const [state, setstate] = useState({data:""})

  const setMovieFilter = (msg) => {
    setstate({data: msg});
  }
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Tumble</h1>
      </header>
      <Button onClick={() => {setMovieFilter('trending');}} variant="warning">Trending</Button>
      <Button onClick={() => {setMovieFilter('topRated');}} variant="danger">Top Rated</Button>
      <MovieMain selection={state.data} />
    </div>
  );
}

export default App;
