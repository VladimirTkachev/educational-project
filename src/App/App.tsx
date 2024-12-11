import { Suspense } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'App/providers/ThemeProvider/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  return (
    <div className={cn('app', {}, [])}>
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
