import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';

// %------------ components ------------% //
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { PlaceCardType, ReviewType, OfferType } from '../../types';

// ^======================== App ========================^ //

type AppProps = {
  mocks: [
    PlaceCardType[], PlaceCardType[], PlaceCardType[], ReviewType[], OfferType,
  ];
};

export default function App({ mocks }: AppProps): JSX.Element {
  const [OFFERS, NEAR_PLACES, FAVORITE_OFFERS, REVIEWS, OFFER] = mocks;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage offers={OFFERS} />} />
            <Route
              path={AppRoute.Offer}
              element={
                <OfferPage
                  offerData={OFFER}
                  nearPlaces={NEAR_PLACES}
                  reviews={REVIEWS}
                />
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesPage favoriteOffers={FAVORITE_OFFERS} />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Login} element={<LoginPage authorizationStatus={AuthorizationStatus.Unknown} />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </HelmetProvider >
  );
}
