import logo from './logo.svg';
import { Stopwatch } from './components/stopwatch';
import { LogCounter } from './components/log-counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Stopwatch />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <LogCounter />
      </main>
    </div>
  );
}

export default App;
