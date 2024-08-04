import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setDarkMode = () => {
    setTheme('dark');
  };
  const setLightMode = () => {
    setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
