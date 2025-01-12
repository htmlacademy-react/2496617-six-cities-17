import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersProcess } from './offers-process/offers-process.slice';
import { authProcess } from './auth-process/auth-process.slice';
import { offerProcess } from './offer-process/offer-process.slice';
import { nearPlacesProcess } from './near-places-process/near-places-process.slice';
import { favoriteOffersProcess } from './favorite-offers-process/favorite-offers-process.slice';
import { reviewsProcess } from './reviews-process/reviews-process.slice';

// %======================== RootReducer ========================% //

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Auth]: authProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.NearPlaces]: nearPlacesProcess.reducer,
  [NameSpace.FavoriteOffers]: favoriteOffersProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer,
});
