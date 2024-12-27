import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppState, PlaceCardType, AuthData, UserData, OfferType, ReviewType, ReviewData, AuthResponse } from '../types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';

// %======================== api-action ========================% //

type AsyncThunkType = {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
};

// @------------------------ fetchOffers ------------------------@ //
export const fetchOffersAction = createAsyncThunk<
  PlaceCardType[],
  undefined,
  AsyncThunkType
>('offers/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<PlaceCardType[]>(APIRoute.Offers);
  return data;
});

// @------------------------ fetchOffer ------------------------@ //
export const fetchOfferAction = createAsyncThunk<
  OfferType,
  string,
  AsyncThunkType
>('offer/fetchOffer', async (id, { extra: api }) => {
  const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
  return data;
});

// @------------------------ fetchNearPlaces ------------------------@ //
export const fetchNearPlacesAction = createAsyncThunk<
  PlaceCardType[],
  string,
  AsyncThunkType
>('fetchNearPlaces', async (offerId, { extra: api }) => {
  const { data } = await api.get<PlaceCardType[]>(APIRoute.NearPlaces.replace(':offerId', offerId));
  return data;
});

// @------------------------ fetchReviews ------------------------@ //
export const fetchReviewsAction = createAsyncThunk<
  ReviewType[],
  string,
  AsyncThunkType
>('reviews/fetchReviews', async (offerId, { extra: api }) => {
  const { data } = await api.get<ReviewType[]>(APIRoute.Reviews.replace(':offerId', offerId));
  return data;
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
>('reviews/postReview', async ({ comment, rating, offerId }, { dispatch, extra: api }) => {
  await api.post<ReviewData>(APIRoute.Reviews.replace(':offerId', offerId), { rating, comment });
  dispatch(fetchReviewsAction(offerId));
});

// @------------------------ fetchFavoriteOffers ------------------------@ //
export const fetchFavoriteOffersAction = createAsyncThunk<
  PlaceCardType[],
  undefined,
  AsyncThunkType
>('fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<PlaceCardType[]>(APIRoute.Favorites);
  return data;
});

// @------------------------ checkAuth ------------------------@ //
export const checkAuthAction = createAsyncThunk<
  string,
  undefined,
  AsyncThunkType
>('auth/checkAuth', async (_arg, { extra: api }) => {
  const { data: { email } } = await api.get<AuthResponse>(APIRoute.Login);
  return email;
});

// @------------------------ login ------------------------@ //
export const loginAction = createAsyncThunk<
  void,
  AuthData,
  AsyncThunkType
>('auth/login', async ({ login: email, password }, { extra: api }) => {
  const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
});

// @------------------------ logout ------------------------@ //
export const logoutAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkType
>('auth/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
