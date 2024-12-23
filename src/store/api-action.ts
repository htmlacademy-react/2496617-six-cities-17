// %======================== api-action ========================% //

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppState, PlaceCardType, AuthData, UserData } from '../types';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, requireAuthorization, setLogin, setDataLoading, setError } from './action';
import { store } from './index';
import { dropLogin, dropToken, getLogin, saveLogin, saveToken } from '../services/token';

// @------------------------ fetchOffers ------------------------@ //
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

// @------------------------ checkAuth ------------------------@ //
export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setLogin(getLogin()));
  } catch (error) {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setLogin(''));
  }
});

// @------------------------ login ------------------------@ //
export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('login', async ({ login: email, password }, { dispatch, extra: api }) => {
  const { data: { token, email: login } } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  saveLogin(login);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(setLogin(login));
});

// @------------------------ logout ------------------------@ //
export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dropLogin();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(setLogin(''));
});


// @------------------------ clearError ------------------------@ //
export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
});
