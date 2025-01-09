import { createSlice } from '@reduxjs/toolkit';
import { DataStatus, NameSpace } from '../../const';
import { FavoriteOffersProcess } from '../../types';
import { fetchFavoriteOffersAction, addToFavoriteAction, removeFromFavoriteAction } from '../api-action';
import { toast } from 'react-toastify';

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
      .addCase(addToFavoriteAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        state.data.push(updatedOffer);
      })
      .addCase(addToFavoriteAction.rejected, () => {
        toast.error('Could not add to favorite');
      })
      .addCase(removeFromFavoriteAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const offerId = state.data.findIndex((offer) => offer.id === updatedOffer.id);
        state.data.splice(offerId, 1);
      })
      .addCase(removeFromFavoriteAction.rejected, () => {
        toast.error('Could not remove from favorite');
      });
  }
});
