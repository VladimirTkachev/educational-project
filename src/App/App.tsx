import { Suspense, useEffect } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTheme } from 'App/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { useDispatch } from 'react-redux';
import { User, userActions } from 'entities/User';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const user: User = JSON.parse(
      localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? JSON.stringify(''),
    );

    if (user) {
      dispatch(userActions.setAuthData(user));
    }
  }, [dispatch]);

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
