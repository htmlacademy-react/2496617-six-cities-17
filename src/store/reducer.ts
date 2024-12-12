import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';

// %======================== reducer ========================% //

const initialState = {
  city: 'paris',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });
});
