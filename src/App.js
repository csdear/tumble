import logo from './logo.svg';
import './App.css';
import Users from './component/users'
import Trending from './component/trending'

function App() {
  console.log('@App()');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Users />
      <Trending />
    </div>
  );
}

export default App;
