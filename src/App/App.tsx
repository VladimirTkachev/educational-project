import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { classNames as cn } from 'shared/lib/classNames/classNames'
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

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
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/" element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  )
}
