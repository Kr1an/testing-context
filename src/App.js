import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from './ThemeContext';

function App() {
  const [count, setCount] = useState(0);
  const color = React.useContext(ThemeContext);
  return (
    <div className="App">
      <div>
        <p style={{ color }}>
          Hello World
        </p>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
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
    </div>
  );
}

export default App;
