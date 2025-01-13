import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { browserHistory } from '../../browser-history/browser-history';
import { AppRoute, AuthorizationStatus, DataStatus } from '../../const';


import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { fetchFavoriteOffersAction } from '../../store/api-action';
import { getAuthStatus } from '../../store/auth-process/auth-process.selectors';
import { getFavoriteOffersStatus } from '../../store/favorite-offers-process/favorite-offers-process.selectors';
import { getOffersStatus } from '../../store/offers-process/offers-process.selectors';
import HistoryRouter from '../history-router/history-router';
import Layout from '../layout/layout';
import Preloader from '../preloader/preloader';
import PrivateRoute from '../private-route/private-route';

// ^======================== App ========================^ //

export default function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();
  const favoriteOffersStatus = useAppSelector(getFavoriteOffersStatus);
  const offersStatus = useAppSelector(getOffersStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth && favoriteOffersStatus === DataStatus.Unknown) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [authStatus, dispatch, favoriteOffersStatus]);

  if (!(favoriteOffersStatus !== DataStatus.Loading
    && offersStatus !== DataStatus.Loading)) {
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
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ HistoryRouter>
    </HelmetProvider >
  );
}
