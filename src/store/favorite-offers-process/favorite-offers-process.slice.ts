import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { DataStatus, NameSpace } from '../../const';
import { FavoriteOffersProcess } from '../../types';
import { addToFavoritesAction, fetchFavoriteOffersAction, logoutAction, removeFromFavoritesAction } from '../api-action';

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
        state.status = DataStatus.Error;
      })
      .addCase(addToFavoritesAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        state.data.push(updatedOffer);
      })
      .addCase(addToFavoritesAction.rejected, () => {
        toast.error('Could not add to favorite');
      })
      .addCase(removeFromFavoritesAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const offerId = state.data.findIndex((offer) => offer.id === updatedOffer.id);
        state.data.splice(offerId, 1);
      })
      .addCase(removeFromFavoritesAction.rejected, () => {
        toast.error('Could not remove from favorite');
      })
      .addCase(logoutAction.fulfilled, () => initialState);
  }
});
