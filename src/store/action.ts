import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, SortingOption } from '../const';
import { OfferType, PlaceCardType, ReviewType } from '../types';

// %======================== action ========================% //

export const changeCity = createAction<string>('city/changeCity');

export const fillOfferList = createAction('offers/fillOfferList');

export const changeSortingType = createAction<SortingOption>('sorting/changeSortingType');

export const loadOffers = createAction<PlaceCardType[]>('offers/loadOffers');

export const loadOffer = createAction<OfferType>('offer/loadOffer');

export const loadNearPlaces = createAction<PlaceCardType[]>('offer/loadNearPlaces');

export const loadReviews = createAction<ReviewType[]>('offer/loadNearReviews');

export const loadFavoriteOffers = createAction<PlaceCardType[]>('favorites/loadFavoriteOffers');

export const setDataLoading = createAction<boolean>('data/setDataLoading');

export const requireAuthorization = createAction<AuthorizationStatus>('auth/requireAuthorization');

export const setLogin = createAction<string | null>('auth/setLogin');

export const redirectToRoute = createAction<AppRoute>('navigation/redirectToRoute');

export const setError = createAction<string | null>('app/setError');
