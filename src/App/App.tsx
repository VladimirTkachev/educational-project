import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { classNames as cn } from "../Helpers/ClassNames/classNames";
import { AboutPageAsync } from "../Pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../Pages/MainPage/MinPage.async";
import '../Styles/themes/dark.scss';
import '../Styles/themes/normal.scss';
import { useTheme } from "../Theme/hooks/useTheme";
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
          <Route path="/about" element={<AboutPageAsync/>}/>
          <Route path="/" element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}
