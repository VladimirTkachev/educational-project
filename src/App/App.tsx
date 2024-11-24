import { classNames as cn } from 'shared/lib/classNames/classNames'
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/ThemeProvider/router";
import { Navbar } from "widgets/Navbar";

import 'app/styles/themes/dark.scss';
import 'app/styles/themes/normal.scss';

import './app.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar />
      <button type='button' onClick={() => toggleTheme()}>Перключить тему</button>
      <AppRouter />
    </div>
  )
}
