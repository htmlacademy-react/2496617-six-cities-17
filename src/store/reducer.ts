import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOfferList } from './action';
import { OFFERS } from '../mock/offers';
import { getCityLocation, getOffersByCityName } from '../utils/utils';
import { DEFAULT_CITY_NAME } from '../const';

// %======================== reducer ========================% //

const initialState = {
  cityName: DEFAULT_CITY_NAME,
  cityLocation: getCityLocation(OFFERS),
  offers: getOffersByCityName(OFFERS, DEFAULT_CITY_NAME),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(fillOfferList, (state) => {
      state.offers = getOffersByCityName(OFFERS, state.cityName);
      state.cityLocation = getCityLocation(state.offers);
    });
});
