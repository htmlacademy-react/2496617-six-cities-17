import { describe, it } from 'vitest';
import { DataStatus, NameSpace } from '../../const';
import { getFavoriteOffers, getFavoriteOffersStatus } from './favorite-offers-process.selectors';
import { makeFakePlaceCard } from '../../utils/mocks';
import { getRandomInteger } from '../../utils/utils';

describe('FavoriteOffersProcess selectors', () => {
  const state = {
    [NameSpace.FavoriteOffers]: {
      data: Array.from({length: getRandomInteger(0, 10)}, makeFakePlaceCard),
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
