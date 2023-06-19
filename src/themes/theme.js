import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../helper';

export const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.de);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode);
  };

  useEffect(() =>{
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.birthday);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};