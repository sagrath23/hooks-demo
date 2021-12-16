import { useState, useContext } from 'react';
import { ThemeContext } from '../../App';

export const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const { toggleCurrentTheme } = useContext(ThemeContext);
  const handleToggleClick = () => {
    setIsDark(!isDark);

    toggleCurrentTheme();
  }

  return (
    <>
      <label for="toggleTheme">{isDark ? 'Dark' : 'Light'}</label>
      <input id="toggleTheme" type="checkbox" onChange={handleToggleClick} />
    </>
  );
};