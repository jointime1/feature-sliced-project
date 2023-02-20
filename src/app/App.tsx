import { Suspense, useState, useContext } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
            <Suspense fallback="loading">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
