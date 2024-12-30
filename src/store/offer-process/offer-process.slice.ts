import { createSlice } from '@reduxjs/toolkit';
import { DataStatus, EMPTY_OFFER, NameSpace } from '../../const';
import { fetchOfferAction } from '../api-action';

// %======================== offer-process.slice ========================% //

const initialState = {
  data: EMPTY_OFFER,
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
      });
  }
});
