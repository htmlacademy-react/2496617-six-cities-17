import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortingType, loadOffers, setDataLoading, setError } from './action';
import { getOffersByCityName, getCityLocation, sortOffers } from '../utils/utils';
import { DEFAULT_CITY_NAME, DEFAULT_CITY_LOCATION, SortingOption } from '../const';
import { InitialState } from '../types';

// %======================== reducer ========================% //

const initialCityState: InitialState = {
  cityName: DEFAULT_CITY_NAME,
  cityLocation: DEFAULT_CITY_LOCATION,
  allOffers: [],
  offers: [],
  sortingType: SortingOption.POPULAR,
  error: null,
  isDataLoading: false,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    });
});
