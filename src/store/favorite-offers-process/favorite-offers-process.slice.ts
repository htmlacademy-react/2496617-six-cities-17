import { createSlice } from '@reduxjs/toolkit';
import { DataStatus, NameSpace } from '../../const';
import { FavoriteOffersProcess } from '../../types';
import { fetchFavoriteOffersAction } from '../api-action';

// %======================== favorite-offers-process.slice ========================% //

const initialState: FavoriteOffersProcess = {
  data: [],
  status: DataStatus.Unknown,
};

export const favoriteOffersProcess = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.status = DataStatus.Loading;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.status = DataStatus.Loaded;
        state.data = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        // if (state.auth.status === AuthorizationStatus.Auth) {
        state.status = DataStatus.Error;
        // } else {
        // state.status = DataStatus.Unknown;
        // }
      });
  }
});
