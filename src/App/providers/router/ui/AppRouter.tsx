import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouterContainer = () => {
  const isAuth = useSelector(getUserAuthData);

  const protectedRoutes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (route?.authOnly && !isAuth) {
      return false;
    }

    return true;
  }), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {protectedRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export const AppRouter = memo(AppRouterContainer);
