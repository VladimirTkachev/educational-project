import { createContext, FC, useMemo, useState } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContext {
  theme?: Theme;
  onThemeChange?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const providerValue = useMemo(() => {
    return {
      theme,
      onThemeChange: (theme: Theme) => {
        setTheme(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
      }
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}
