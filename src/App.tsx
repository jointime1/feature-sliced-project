import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {Suspense, useState, useContext} from 'react';
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";



const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О странице</Link>
      <button onClick={toggleTheme}>Поменять тему</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}


export default App