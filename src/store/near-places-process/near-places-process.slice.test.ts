import { faker } from '@faker-js/faker';
import { describe, it } from 'vitest';
import { DataStatus } from '../../const';
import { makeFakePlaceCard } from '../../utils/mocks';
import { getRandomInteger, updateFavoriteStatus } from '../../utils/utils';
import { addToFavoritesAction, fetchNearPlacesAction, logoutAction, removeFromFavoritesAction } from '../api-action';
import { nearPlacesProcess } from './near-places-process.slice';

describe('NearPlacesProcess slice', () => {
  const emptyAction = { type: '' };

  it('Should return initial state with empty action', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Unknown,
    };
    const result = nearPlacesProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action and undefined state', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Unknown,
    };
    const result = nearPlacesProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Should set status to "loading" with "fetchNearPlacesAction.pending"', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Loading,
    };
    const result = nearPlacesProcess.reducer(undefined, fetchNearPlacesAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "loaded" and "data" to array of near places with "fetchNearPlacesAction.fulfilled"', () => {
    const mockNearPlaces = Array.from({ length: 3 }, makeFakePlaceCard);
    const mockOfferId = faker.string.nanoid();
    const expectedState = {
      data: mockNearPlaces,
      status: DataStatus.Loaded,
    };
    const result = nearPlacesProcess.reducer(undefined, fetchNearPlacesAction.fulfilled(mockNearPlaces, mockOfferId, ''));
    expect(result).toEqual(expectedState);
  });

  it('Should set status to "error" with "fetchNearPlacesAction.rejected"', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Error,
    };
    const result = nearPlacesProcess.reducer(undefined, fetchNearPlacesAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('Should update favorite offers with "addToFavoritesAction.fulfilled"', () => {
    const mockNearPlaces = Array.from({ length: 10 }, makeFakePlaceCard);
    const mockNearPlace = mockNearPlaces[getRandomInteger(0, 10)];

    const initialState = {
      data: mockNearPlaces,
      status: DataStatus.Unknown,
    };

    const expectedState = {
      data: updateFavoriteStatus(mockNearPlaces, mockNearPlace, true),
      status: DataStatus.Unknown,
    };
    const result = nearPlacesProcess.reducer(initialState, addToFavoritesAction.fulfilled(mockNearPlace, mockNearPlace.id, ''));
    expect(result).toEqual(expectedState);
  });

  it('Should update favorite offers with "removeFromFavoritesAction.fulfilled"', () => {
    const mockNearPlaces = Array.from({ length: 10 }, makeFakePlaceCard);
    const mockNearPlace = mockNearPlaces[getRandomInteger(0, mockNearPlaces.length - 1)];

    const initialState = {
      data: mockNearPlaces,
      status: DataStatus.Unknown,
    };

    const expectedState = {
      data: updateFavoriteStatus(mockNearPlaces, mockNearPlace, false),
      status: DataStatus.Unknown,
    };
    const result = nearPlacesProcess.reducer(initialState, removeFromFavoritesAction.fulfilled(mockNearPlace, mockNearPlace.id, ''));
    expect(result).toEqual(expectedState);
  });

  it('should remove favorite status from all near places with "logoutAction.fulfilled"', () => {
    const mockNearPlaces = Array.from({ length: 10 }, makeFakePlaceCard);
    const initialState = {
      data: mockNearPlaces,
      status: DataStatus.Unknown,
    };
    const expectedState = {
      data: mockNearPlaces.map((offer) => ({ ...offer, isFavorite: false })),
      status: DataStatus.Unknown,
    };
    const result = nearPlacesProcess.reducer(initialState, logoutAction.fulfilled(undefined, '', undefined));
    expect(result).toEqual(expectedState);
  });
});
