import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, DataStatus, OFFER_PATH_PARAM } from '../../const';
import { useAppSelector } from '../../hooks';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { getAuthStatus } from '../../store/auth-process/auth-process.selectors';
import { getFavoriteOffersStatus } from '../../store/favorite-offers-process/favorite-offers-process.selectors';
import { getOffersStatus } from '../../store/offers-process/offers-process.selectors';
import Layout from '../layout/layout';
import Preloader from '../preloader/preloader';
import PrivateRoute from '../private-route/private-route';

// ^======================== App ========================^ //

export default function App(): JSX.Element {
  const favoriteOffersStatus = useAppSelector(getFavoriteOffersStatus);
  const offersStatus = useAppSelector(getOffersStatus);
  const authStatus = useAppSelector(getAuthStatus);

  if (!(favoriteOffersStatus !== DataStatus.Loading
    && offersStatus !== DataStatus.Loading)) {
    return <Preloader />;
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path={`${AppRoute.Offer}${OFFER_PATH_PARAM}`}
            element={
              <OfferPage />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authStatus}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HelmetProvider >
  );
}
