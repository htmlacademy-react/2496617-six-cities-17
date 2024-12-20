// %======================== api-action ========================% //

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppState, PlaceCardType } from '../types';
import { AxiosInstance } from 'axios';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, setDataLoading, setError } from './action';
import { store } from './index';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoading(true));
  try {
    const { data } = await api.get<PlaceCardType[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
  } finally {
    dispatch(setDataLoading(false));
  }
});

export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
});
