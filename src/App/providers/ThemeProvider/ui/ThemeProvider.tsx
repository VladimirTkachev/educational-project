import {
  createContext, FC, useCallback, useEffect, useMemo, useState,
} from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  onThemeChange?: (theme: Theme) => void;
}

export interface ThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = useCallback((theme: Theme) => {
    setTheme(theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, []);

  const providerValue = useMemo(() => ({
    theme,
    onThemeChange: handleThemeChange,
  }), [handleThemeChange, theme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};
