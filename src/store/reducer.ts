import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortingType } from './action';
import { getOffersByCityName, getCityLocation, sortOffers } from '../utils/utils';
import { DEFAULT_CITY_NAME, DEFAULT_CITY_LOCATION, SortingOption, AuthorizationStatus, EMPTY_OFFER, DataStatus } from '../const';
import { InitialState } from '../types';
import { checkAuthAction, fetchFavoriteOffersAction, fetchNearPlacesAction, fetchOfferAction, fetchOffersAction, fetchReviewsAction, loginAction, logoutAction, postReviewAction } from './api-action';
import { toast } from 'react-toastify';

// %======================== reducer ========================% //

const initialCityState: InitialState = {
  city: {
    name: DEFAULT_CITY_NAME,
    location: DEFAULT_CITY_LOCATION
  },
  auth: {
    status: AuthorizationStatus.Unknown,
    login: '',
    avatarUrl: '',
  },
  offers: {
    all: [],
    sorted: [],
    sortingType: SortingOption.POPULAR,
    status: DataStatus.Unknown,
  },
  offer: {
    data: EMPTY_OFFER,
    status: DataStatus.Unknown,
  },
  nearPlaces: {
    data: [],
    status: DataStatus.Unknown,
  },
  reviews: {
    data: [],
    status: DataStatus.Unknown,
  },
  favoriteOffers: {
    data: [],
    status: DataStatus.Unknown,
  }
};

export const reducer = createReducer(initialCityState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city.name = action.payload;
      state.offers.sortingType = SortingOption.POPULAR;
      state.offers.sorted = getOffersByCityName(state.offers.all, state.city.name);
      state.city.location = getCityLocation(state.offers.sorted);
    })
    .addCase(changeSortingType, (state, action) => {
      state.offers.sortingType = action.payload || SortingOption.POPULAR;
      state.offers.sorted = sortOffers(getOffersByCityName(state.offers.all, state.city.name), action.payload);
    })

    // @------------ check auth ------------@ //
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.auth.status = AuthorizationStatus.Auth;
      state.auth.login = action.payload.email;
      state.auth.avatarUrl = action.payload.avatarUrl;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.auth.status = AuthorizationStatus.NoAuth;
      state.auth.login = '';
    })
    // @------------ login ------------@ //
    .addCase(loginAction.fulfilled, (state) => {
      state.auth.status = AuthorizationStatus.Auth;
    })
    .addCase(loginAction.rejected, (state) => {
      state.auth.status = AuthorizationStatus.Unknown;
    })
    // @------------ logout ------------@ //
    .addCase(logoutAction.fulfilled, (state) => {
      state.auth.status = AuthorizationStatus.NoAuth;
      state.auth.login = '';
    })
    .addCase(logoutAction.rejected, (state) => {
      state.auth.status = AuthorizationStatus.Auth;
    })

    // @------------ offers ------------@ //
    .addCase(fetchOffersAction.pending, (state) => {
      state.offers.status = DataStatus.Loading;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers.status = DataStatus.Loaded;
      state.offers.all = action.payload;
      state.offers.sorted = getOffersByCityName(state.offers.all, state.city.name);
      state.city.location = getCityLocation(state.offers.sorted);
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.offers.status = DataStatus.Error;
    })

    // @------------ offer ------------@ //
    .addCase(fetchOfferAction.pending, (state) => {
      state.offer.status = DataStatus.Loading;
    })
    .addCase(fetchOfferAction.fulfilled, (state, action) => {
      state.offer.data = action.payload;
      state.offer.status = DataStatus.Loaded;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.offer.status = DataStatus.Error;
    })
    // @------------ nearPlaces ------------@ //
    .addCase(fetchNearPlacesAction.pending, (state) => {
      state.nearPlaces.status = DataStatus.Loading;
    })
    .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
      state.nearPlaces.data = action.payload;
      state.nearPlaces.status = DataStatus.Loaded;
    })
    .addCase(fetchNearPlacesAction.rejected, (state) => {
      state.nearPlaces.status = DataStatus.Error;
    })

    // @------------ get reviews ------------@ //
    .addCase(fetchReviewsAction.pending, (state) => {
      state.reviews.status = DataStatus.Loading;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.reviews.status = DataStatus.Loaded;
      state.reviews.data = action.payload;
    })
    .addCase(fetchReviewsAction.rejected, (state) => {
      state.reviews.status = DataStatus.Error;
    })

    // @------------ post review ------------@ //
    .addCase(postReviewAction.rejected, () => {
      toast.error('Could not send review');
    })

    // @------------ favoriteOffers ------------@ //
    .addCase(fetchFavoriteOffersAction.pending, (state) => {
      state.favoriteOffers.status = DataStatus.Loading;
    })
    .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
      state.favoriteOffers.status = DataStatus.Loaded;
      state.favoriteOffers.data = action.payload;
    })
    .addCase(fetchFavoriteOffersAction.rejected, (state) => {
      if (state.auth.status === AuthorizationStatus.Auth) {
        state.favoriteOffers.status = DataStatus.Error;
      } else {
        state.favoriteOffers.status = DataStatus.Unknown;
      }
    });
});
