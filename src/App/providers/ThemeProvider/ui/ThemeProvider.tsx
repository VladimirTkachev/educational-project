import {
  createContext, FC, useMemo, useState,
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

  const providerValue = useMemo(() => ({
    theme,
    onThemeChange: (theme: Theme) => {
      setTheme(theme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    },
  }), [theme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};
