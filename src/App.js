import { createContext, useState } from 'react';
import logo from './logo.svg';
import { Stopwatch } from './components/stopwatch';
import { LogCounter } from './components/log-counter';
import { RedCounter } from './components/red-counter';
import { ThemeSwitch } from './components/theme-switch';
import './App.css';

const themes = {
  light: {
    foreground: "#282c34",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#282c34"
  }
};

export const ThemeContext = createContext(themes.light);

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const toggleCurrentTheme = () => {
    const newTheme = currentTheme.background === '#282c34' ? themes.light : themes.dark;

    setCurrentTheme(newTheme);
  };
  const contextValue = {
    theme: currentTheme,
    toggleCurrentTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className="App">
        <header className="App-header" style={{ background: currentTheme.background, color: currentTheme.foreground }}>
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
        <main className='main' style={{ background: currentTheme.background, color: currentTheme.foreground }}>
          <div>
            <LogCounter />
          </div>
          <div>
            <RedCounter />
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
