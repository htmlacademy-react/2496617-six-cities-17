import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortingType, fillOfferList } from './action';
import { OFFERS } from '../mock/offers';
import { getCityLocation, getOffersByCityName, sortOffers } from '../utils/utils';
import { DEFAULT_CITY_NAME, SortingOptions } from '../const';

// %======================== reducer ========================% //

const initialCityState = {
  cityName: DEFAULT_CITY_NAME,
  cityLocation: getCityLocation(OFFERS),
  offers: getOffersByCityName(OFFERS, DEFAULT_CITY_NAME),
  sortingType: SortingOptions.POPULAR,
};

export const reducer = createReducer(initialCityState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
      state.sortingType = SortingOptions.POPULAR;
    })
    .addCase(fillOfferList, (state) => {
      state.offers = getOffersByCityName(OFFERS, state.cityName);
      state.cityLocation = getCityLocation(state.offers);
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload || SortingOptions.POPULAR;
      state.offers = sortOffers(getOffersByCityName(OFFERS, state.cityName), action.payload);
    });
});
