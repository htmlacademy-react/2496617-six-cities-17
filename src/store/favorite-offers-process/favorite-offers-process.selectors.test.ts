import { describe, it } from 'vitest';
import { DataStatus, NameSpace } from '../../const';
import { getFavoriteOffers, getFavoriteOffersStatus } from './favorite-offers-process.selectors';

describe('FavoriteOffersProcess selectors', () => {
  const state = {
    [NameSpace.FavoriteOffers]: {
      data: [],
      status: DataStatus.Unknown,
    }
  };

  it('Should return favorite offers data from state', () => {
    const { data } = state[NameSpace.FavoriteOffers];
    const result = getFavoriteOffers(state);
    expect(result).toBe(data);
  });

  it('Should return favorite offers data loading status from state', () => {
    const { status } = state[NameSpace.FavoriteOffers];
    const result = getFavoriteOffersStatus(state);
    expect(result).toBe(status);
  });
});
