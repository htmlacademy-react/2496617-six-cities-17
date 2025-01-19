import { faker } from '@faker-js/faker';
import { describe } from 'vitest';
import { DataStatus } from '../../const';
import { makeFakeOffer } from '../../utils/mocks';
import { addToFavoritesAction, fetchOfferAction, logoutAction, removeFromFavoritesAction } from '../api-action';
import { offerProcess } from './offer-process.slice';

describe('OfferProcess Slice', () => {
  const emptyAction = { type: '' };

  it('Should return initial state with empty action', () => {
    const expectedState = {
      data: null,
      status: DataStatus.Unknown,
    };
    const result = offerProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action and undefined state', () => {
    const expectedState = {
      data: null,
      status: DataStatus.Unknown,
    };
    const result = offerProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "loading" with "fetchOfferAction.pending"', () => {
    const expectedState = {
      data: null,
      status: DataStatus.Loading,
    };
    const result = offerProcess.reducer(undefined, fetchOfferAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "loaded" and data to offer\'s data object with "fetchOfferAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const mockOfferId = faker.string.nanoid();
    const expectedState = {
      data: mockOffer,
      status: DataStatus.Loaded,
    };
    const result = offerProcess.reducer(undefined, fetchOfferAction.fulfilled(mockOffer, mockOfferId, ''));
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "error" with "fetchOfferAction.rejected"', () => {
    const expectedState = {
      data: null,
      status: DataStatus.Error,
    };
    const result = offerProcess.reducer(undefined, fetchOfferAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('Should update favorite status with "addToFavoritesAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();

    const initialState = {
      data: { ...mockOffer, isFavorite: false },
      status: DataStatus.Unknown,
    };

    const expectedState = {
      data: { ...mockOffer, isFavorite: true },
      status: DataStatus.Unknown,
    };

    const result = offerProcess.reducer(initialState, addToFavoritesAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('Should update favorite offers with "removeFromFavoritesAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();

    const initialState = {
      data: { ...mockOffer, isFavorite: true },
      status: DataStatus.Unknown,
    };

    const expectedState = {
      data: { ...mockOffer, isFavorite: false },
      status: DataStatus.Unknown,
    };

    const result = offerProcess.reducer(initialState, removeFromFavoritesAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('should remove favorite status from offer with "logoutAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();

    const initialState = {
      data: { ...mockOffer, isFavorite: true },
      status: DataStatus.Unknown,
    };

    const expectedState = {
      data: { ...mockOffer, isFavorite: false },
      status: DataStatus.Unknown,
    };

    const result = offerProcess.reducer(initialState, logoutAction.fulfilled);
    expect(result).toEqual(expectedState);
  });
});
