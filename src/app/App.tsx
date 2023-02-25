import { Suspense, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './providers/router';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <Navbar />

            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
