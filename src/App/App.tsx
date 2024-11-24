import { Link } from "react-router-dom";

import { classNames as cn } from 'shared/lib/classNames/classNames'
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/ThemeProvider/router";

import 'app/styles/themes/dark.scss';
import 'app/styles/themes/normal.scss';

import './app.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <button type='button' onClick={() => toggleTheme()}>Перключить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  )
}
