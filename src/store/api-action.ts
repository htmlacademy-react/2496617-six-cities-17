import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AppDispatch, AppState, AuthData, AuthResponse, OfferType, PlaceCardType, ReviewData, ReviewType, UserData } from '../types';

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
>('offer/fetchNearPlaces', async (offerId, { extra: api }) => {
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
>('favoriteOffers/fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<PlaceCardType[]>(APIRoute.Favorites);
  return data;
});

// @------------------------ addToFavoritesAction ------------------------@ //
export const addToFavoriteAction = createAsyncThunk<
  PlaceCardType,
  string,
  AsyncThunkType
>('favoriteOffers/addToFavorite', async (offerId, { extra: api }) => {
  const { data } = await api.post<PlaceCardType>(`${APIRoute.Favorites}/${offerId}/1`);
  return data;
});

// @------------------------ removeFromFavoritesAction ------------------------@ //
export const removeFromFavoriteAction = createAsyncThunk<
  PlaceCardType,
  string,
  AsyncThunkType
>('favoriteOffers/removeFromFavorite', async (offerId, { extra: api }) => {
  const { data } = await api.post<PlaceCardType>(`${APIRoute.Favorites}/${offerId}/0`);
  return data;
});

// @------------------------ checkAuth ------------------------@ //
export const checkAuthAction = createAsyncThunk<
  AuthResponse,
  undefined,
  AsyncThunkType
>('auth/checkAuth', async (_arg, { extra: api }) => {
  const { data: { email, avatarUrl } } = await api.get<AuthResponse>(APIRoute.Login);
  return { email, avatarUrl };
});

// @------------------------ login ------------------------@ //
export const loginAction = createAsyncThunk<
  void,
  AuthData,
  AsyncThunkType
>('auth/login', async ({ email: email, password }, { dispatch, extra: api }) => {
  const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(fetchFavoriteOffersAction());
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
