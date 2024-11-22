import { useContext } from "react";

import { Theme, ThemeContext } from "../ThemeContext";

export function useTheme() {
  const { theme, onThemeChange } = useContext(ThemeContext);

  const toggleTheme = () => {
    onThemeChange(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return {
    theme,
    toggleTheme,
  }
}
