// %======================== api-action ========================% //

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppState, PlaceCardType, AuthData, UserData, OfferType, ReviewType, ReviewData } from '../types';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { loadOffers, requireAuthorization, setLogin, setDataLoading, loadOffer, redirectToRoute, loadNearPlaces, loadReviews } from './action';
import { dropLogin, dropToken, getLogin, saveLogin, saveToken } from '../services/token';
import { toast } from 'react-toastify';

type AsyncThunkType = {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
};

// @------------------------ fetchOffers ------------------------@ //
export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkType
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
  AsyncThunkType
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
  AsyncThunkType
>('fetchNearPlaces', async (offerId, { dispatch, extra: api }) => {
  dispatch(setDataLoading(true));
  try {
    const { data } = await api.get<PlaceCardType[]>(APIRoute.NearPlaces.replace(':offerId', offerId));
    dispatch(loadNearPlaces(data));
  } finally {
    dispatch(setDataLoading(false));
  }
});

// @------------------------ fetchFavoriteOffers ------------------------@ //
export const fetchFavoriteOffersAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkType
>('fetchFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoading(true));
  try {
    const { data } = await api.get<PlaceCardType[]>(APIRoute.Favorites);
    dispatch(loadNearPlaces(data));
  } finally {
    dispatch(setDataLoading(false));
  }
});

// @------------------------ fetchReviews ------------------------@ //
export const fetchReviewsAction = createAsyncThunk<
  void,
  string,
  AsyncThunkType
>('fetchReviews', async (offerId, { dispatch, extra: api }) => {
  dispatch(setDataLoading(true));
  try {
    const { data } = await api.get<ReviewType[]>(APIRoute.Reviews.replace(':offerId', offerId));
    dispatch(loadReviews(data));
  } finally {
    dispatch(setDataLoading(false));
  }
});

// @------------------------ postReview ------------------------@ //
export const postReviewAction = createAsyncThunk<
  void,
  {
    comment: string;
    rating: number;
    offerId: string;
  },
  AsyncThunkType
>('postReview', async ({ comment, rating, offerId }, { dispatch, extra: api }) => {
  try {
    await api.post<ReviewData>(APIRoute.Reviews.replace(':offerId', offerId), { rating, comment });
    dispatch(fetchReviewsAction(offerId));
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage: string = error.message;
      toast.warn(errorMessage);
    }
  }
});

// @------------------------ checkAuth ------------------------@ //
export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkType
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
  AsyncThunkType
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
  AsyncThunkType
>('logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dropLogin();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(setLogin(''));
  dispatch(redirectToRoute(AppRoute.Main));
});
