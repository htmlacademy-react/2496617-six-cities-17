import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, SortingOption } from '../const';
import { OfferType, PlaceCardType, ReviewData, ReviewType } from '../types';

// %======================== action ========================% //

export const changeCity = createAction<string>('changeCity');

export const fillOfferList = createAction('fillOfferList');

export const changeSortingType = createAction<SortingOption>('changeSortingType');

export const loadOffers = createAction<PlaceCardType[]>('loadOffers');

export const loadOffer = createAction<OfferType>('loadOffer');

export const loadNearPlaces = createAction<PlaceCardType[]>('loadNearPlaces');

export const loadReviews = createAction<ReviewType[]>('loadNearReviews');

export const loadFavoriteOffers = createAction<PlaceCardType[]>('loadFavoriteOffers');

export const setDataLoading = createAction<boolean>('setDataLoading');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setLogin = createAction<string | null>('setLogin');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const sendReview = createAction<ReviewData>('sendReview');
