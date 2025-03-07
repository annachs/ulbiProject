import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar/ui';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
