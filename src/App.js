import logo from './logo.svg';
import './App.css';

function App() {
 
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
          This is the variable from .env file: {window._env_ && window._env_.TEST_ENV_VARIABLE && window._env_.TEST_ENV_VARIABLE}
        </a>
      </header>
    </div>
  );
}

export default App;
