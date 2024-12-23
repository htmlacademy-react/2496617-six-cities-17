import { browserHistory } from '../../browser-history/browser-history';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { PlaceCardType, ReviewType, OfferType } from '../../types';
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
import ErrorMessage from '../error-message/error-message';

// ^======================== App ========================^ //

type AppProps = {
  mocks: {
    NEAR_PLACES: PlaceCardType[];
    FAVORITE_OFFERS: PlaceCardType[];
    REVIEWS: ReviewType[];
    OFFER: OfferType;
  };
};

export default function App({ mocks }: AppProps): JSX.Element {
  const { NEAR_PLACES, FAVORITE_OFFERS, REVIEWS } = mocks;
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const error = useAppSelector((state) => state.error);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoading) {
    return <Preloader />;
  }

  if (error) {
    return <ErrorMessage />;
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
                <OfferPage
                  nearPlaces={NEAR_PLACES}
                  reviews={REVIEWS}
                />
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesPage favoriteOffers={FAVORITE_OFFERS} />
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
