'use client';

import { useState, useEffect } from 'react';

const ThemeProvider = ({ 
  children,
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false
}) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // When mounted on client, set the theme based on localStorage or system preference
  useEffect(() => {
    setMounted(true);
    
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
    }
  }, [enableSystem]);

  // Update attribute on document when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    if (disableTransitionOnChange) {
      root.classList.add('disable-transitions');
      setTimeout(() => {
        root.classList.remove('disable-transitions');
      }, 0);
    }
    
    if (attribute === 'class') {
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } else {
      root.setAttribute(attribute, theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted, attribute, disableTransitionOnChange]);

  // Create context value
  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
    },
    themes: ['light', 'dark', 'system'],
  };

  // Provider component
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create context
import { createContext, useContext } from 'react';

const ThemeContext = createContext({
  theme: 'system',
  setTheme: () => null,
  themes: ['light', 'dark', 'system'],
});

// Hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, ThemeContext };
