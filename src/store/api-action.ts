// %======================== api-action ========================% //

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppState, PlaceCardType, AuthData, UserData, OfferType } from '../types';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, requireAuthorization, setLogin, setDataLoading, setError, loadOffer, redirectToRoute, loadNearPlaces } from './action';
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

// @------------------------ fetchOffer ------------------------@ //
export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('fetchOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setDataLoading(true));
  try {
    const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    dispatch(loadOffer(data));
  } catch (error) {
    dispatch(redirectToRoute(AppRoute.NotFound));
  } finally {
    dispatch(setDataLoading(false));
  }
});

// @------------------------ fetchNearPlaces ------------------------@ //
export const fetchNearPlacesAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('fetchNearByPlaces', async (offerId, { dispatch, extra: api }) => {
  dispatch(setDataLoading(true));
  try {
    const { data } = await api.get<PlaceCardType[]>(APIRoute.nearPlaces.replace(':offerId', offerId));
    dispatch(loadNearPlaces(data));
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
  dispatch(redirectToRoute(AppRoute.Main));
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
  dispatch(redirectToRoute(AppRoute.Main));
});


// @------------------------ clearError ------------------------@ //
export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
});
