import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {Suspense, useState, useContext} from 'react';
import "./styles/index.scss";
import { AboutPageAsync } from "pages/AboutPage/ui/AboutPage.async";
import { MainPageAsync } from "pages/MainPage/ui/MainPage.async";
import { Theme, ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/router";



const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О странице</Link>
      <button onClick={toggleTheme}>Поменять тему</button>
      <AppRouter />
    </div>
  )
}


export default App