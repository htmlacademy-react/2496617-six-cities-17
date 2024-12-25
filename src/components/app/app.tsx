import { browserHistory } from '../../browser-history/browser-history';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

// %------------ components ------------% //
import HistoryRouter from '../history-router/history-router';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Preloader from '../preloader/preloader';

// ^======================== App ========================^ //

export default function App(): JSX.Element {
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoading) {
    return <Preloader />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route
              path={AppRoute.Offers}
              element={
                <OfferPage />
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Login} element={<LoginPage authorizationStatus={AuthorizationStatus.Unknown} />} />
            <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ HistoryRouter>
    </HelmetProvider >
  );
}
