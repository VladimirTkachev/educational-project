import { Suspense } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTheme } from 'App/providers/ThemeProvider';
import { AppRouter } from 'App/providers/ThemeProvider/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
