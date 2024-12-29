import { AppState } from '../types';

// %======================== selectors ========================% //

export const getCityName = (state: AppState) => state.city.name;
export const getCityLocation = (state: AppState) => state.city.location;

// @------------ auth ------------@ //
export const getAuthStatus = (state: AppState) => state.auth.status;
export const getLogin = (state: AppState) => state.auth.login;
export const getLoginStatus = (state: AppState) => state.auth.loginStatus;
export const getAvatarUrl = (state: AppState) => state.auth.avatarUrl;

// @------------ offers ------------@ //
export const getAllOffers = (state: AppState) => state.offers.all;
export const getSortingType = (state: AppState) => state.offers.sortingType;
export const getSortedOffers = (state: AppState) => state.offers.sorted;
export const getOffersStatus = (state: AppState) => state.offers.status;

// @------------ offer ------------@ //
export const getOfferData = (state: AppState) => state.offer.data;
export const getOfferStatus = (state: AppState) => state.offer.status;

// @------------ nearPlaces ------------@ //
export const getNearPlaces = (state: AppState) => state.nearPlaces.data;
export const getNearPlacesStatus = (state: AppState) => state.nearPlaces.status;

// @------------ reviews ------------@ //
export const getReviews = (state: AppState) => state.reviews.data;
export const getReviewsStatus = (state: AppState) => state.reviews.status;

// @------------ favoriteOffers ------------@ //
export const getFavoriteOffers = (state: AppState) => state.favoriteOffers.data;

