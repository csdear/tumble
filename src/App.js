import logo from './logo.svg';
import './App.css';
import Users from './component/users'
import MovieMain from './component/MovieMain'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('@App()');
  const selection = 'trending';
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Tumble</h1>
      </header>
      <MovieMain selection={selection} />
    </div>
  );
}

export default App;
