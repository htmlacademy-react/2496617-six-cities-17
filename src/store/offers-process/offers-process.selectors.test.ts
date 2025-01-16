import { describe, it } from 'vitest';
import { DataStatus, NameSpace, SortingOption } from '../../const';
import { getCityName } from './offers-process.selectors';

describe('OffersProcess selectors', () => {
  const state = {
    [NameSpace.Offers]: {
      cityName: 'Paris',
      cityLocation: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      },
      all: [],
      sorted: [],
      sortingType: SortingOption.POPULAR,
      status: DataStatus.Unknown,
    }
  };


  it('Should return city name from state', () => {
    const { cityName } = state[NameSpace.Offers];
    const result = getCityName(state);
    expect(result).toBe(cityName);
  });

});
