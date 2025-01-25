import { useState, useEffect } from 'react';
export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('system');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as typeof theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  },
[]);
  return {
    theme,
    setTheme: (newTheme: typeof theme) => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    },
  };
}
