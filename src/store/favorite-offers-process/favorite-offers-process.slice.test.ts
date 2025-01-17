import { describe, it } from 'vitest';
import { DataStatus } from '../../const';
import { makeFakePlaceCard } from '../../utils/mocks';
import { getRandomInteger } from '../../utils/utils';
import { fetchFavoriteOffersAction, logoutAction, removeFromFavoritesAction } from '../api-action';
import { favoriteOffersProcess } from './favorite-offers-process.slice';

describe('FavoriteOffersProcess slice', () => {
  const emptyAction = { type: '' };

  it('Should return initial state with empty action', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Unknown,
    };

    const result = favoriteOffersProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Unknown,
    };

    const result = favoriteOffersProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "loading" with "fetchFavoriteOffersAction.pending"', () => {
    const initialState = {
      data: [],
      status: DataStatus.Unknown,
    };
    const expectedState = {
      data: [],
      status: DataStatus.Loading,
    };
    const result = favoriteOffersProcess.reducer(initialState, fetchFavoriteOffersAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "loaded" with "fetchFavoriteOffersAction.fulfilled"', () => {
    const mockFavoriteOffers = Array.from({ length: 10 }, makeFakePlaceCard);

    const initialState = {
      data: [],
      status: DataStatus.Unknown,
    };
    const expectedState = {
      data: mockFavoriteOffers,
      status: DataStatus.Loaded,
    };
    const result = favoriteOffersProcess.reducer(initialState, fetchFavoriteOffersAction.fulfilled(mockFavoriteOffers, '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "error" with "fetchFavoriteOffersAction.rejected"', () => {
    const initialState = {
      data: [],
      status: DataStatus.Unknown,
    };
    const expectedState = {
      data: [],
      status: DataStatus.Error,
    };
    const result = favoriteOffersProcess.reducer(initialState, fetchFavoriteOffersAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('Should remove a favorite offer from "data"', () => {
    const mockFavoriteOffers = Array.from({ length: 10 }, makeFakePlaceCard);
    const mockFavoriteOffer = mockFavoriteOffers[getRandomInteger(0, 10)];
    const mockFavoriteOfferIndex = mockFavoriteOffers.indexOf(mockFavoriteOffer);

    const initialState = {
      data: mockFavoriteOffers,
      status: DataStatus.Loaded,
    };
    const expectedState = {
      data: [
        ...mockFavoriteOffers.slice(0, mockFavoriteOfferIndex),
        ...mockFavoriteOffers.slice(mockFavoriteOfferIndex + 1)
      ],
      status: DataStatus.Loaded,
    };
    const result = favoriteOffersProcess.reducer(initialState, removeFromFavoritesAction.fulfilled(mockFavoriteOffer, '', ''));
    expect(result).toEqual(expectedState);
  });

  it('Should remove all favorite offers from state and set status to "unknown" with "logoutAction"', () => {
    const mockFavoriteOffers = Array.from({ length: 10 }, makeFakePlaceCard);
    const initialState = {
      data: mockFavoriteOffers,
      status: DataStatus.Loaded,
    };
    const expectedState = {
      data: [],
      status: DataStatus.Unknown,
    };
    const result = favoriteOffersProcess.reducer(initialState, logoutAction.fulfilled);
    expect(result).toEqual(expectedState);
  });
});
