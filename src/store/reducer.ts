import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortingType, loadFavoriteOffers, loadNearPlaces, loadOffer, loadOffers, loadReviews, requireAuthorization, setDataLoading, setLogin } from './action';
import { getOffersByCityName, getCityLocation, sortOffers } from '../utils/utils';
import { DEFAULT_CITY_NAME, DEFAULT_CITY_LOCATION, SortingOption, AuthorizationStatus, EMPTY_OFFER } from '../const';
import { InitialState } from '../types';

// %======================== reducer ========================% //

const initialCityState: InitialState = {
  cityName: DEFAULT_CITY_NAME,
  cityLocation: DEFAULT_CITY_LOCATION,
  allOffers: [],
  offers: [],
  sortingType: SortingOption.POPULAR,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  login: '',
  currentOffer: EMPTY_OFFER,
  nearPlaces: [],
  reviews: [],
  favoriteOffers: [],
};

export const reducer = createReducer(initialCityState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
      state.sortingType = SortingOption.POPULAR;
      state.offers = getOffersByCityName(state.allOffers, state.cityName);
      state.cityLocation = getCityLocation(state.offers);
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      state.offers = getOffersByCityName(state.allOffers, state.cityName);
      state.cityLocation = getCityLocation(state.offers);
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload || SortingOption.POPULAR;
      state.offers = sortOffers(getOffersByCityName(state.allOffers, state.cityName), action.payload);
    })
    .addCase(setDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setLogin, (state, action) => {
      state.login = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});
