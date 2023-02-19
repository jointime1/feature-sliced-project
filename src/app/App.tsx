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
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/SideBar";



const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}


export default App