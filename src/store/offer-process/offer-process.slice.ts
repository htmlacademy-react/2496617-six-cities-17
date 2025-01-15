import { createSlice } from '@reduxjs/toolkit';
import { DataStatus, NameSpace } from '../../const';
import { OfferType } from '../../types';
import { addToFavoritesAction, fetchOfferAction, logoutAction, removeFromFavoritesAction } from '../api-action';

// %======================== offer-process.slice ========================% //

type InitialState = {
  data: null | OfferType;
  status: DataStatus;
};

const initialState: InitialState = {
  data: null,
  status: DataStatus.Unknown,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.status = DataStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = DataStatus.Loaded;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.status = DataStatus.Error;
      })
      .addCase(addToFavoritesAction.fulfilled, (state) => {
        if (state.data) {
          state.data.isFavorite = true;
        }
      })
      .addCase(removeFromFavoritesAction.fulfilled, (state) => {
        if (state.data) {
          state.data.isFavorite = false;
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        if (state.data) {
          state.data.isFavorite = false;
        }
      });
  }
});
