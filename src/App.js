import logo from './logo.svg';
import './App.css';
import Users from './component/users'
import Trending from './component/trending'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('@App()');
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Tumble</h1>
      </header>
      <Trending />
    </div>
  );
}

export default App;
