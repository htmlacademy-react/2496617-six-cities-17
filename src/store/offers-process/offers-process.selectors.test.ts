import { describe, it } from 'vitest';
import { DataStatus, DEFAULT_CITY_LOCATION, DEFAULT_CITY_NAME, NameSpace, SortingOption } from '../../const';
import { getAllOffers, getCityLocation, getCityName, getOffersStatus, getSortedOffers, getSortingType } from './offers-process.selectors';
import { makeFakePlaceCard } from '../../utils/mocks';
import { getRandomInteger } from '../../utils/utils';

describe('OffersProcess selectors', () => {
  const state = {
    [NameSpace.Offers]: {
      cityName: DEFAULT_CITY_NAME,
      cityLocation: DEFAULT_CITY_LOCATION,
      all: Array.from({length: getRandomInteger(0, 120)}, makeFakePlaceCard),
      sorted: Array.from({ length: getRandomInteger(0, 20) }, makeFakePlaceCard),
      sortingType: SortingOption.POPULAR,
      status: DataStatus.Unknown,
    }
  };

  it('Should return city name from state', () => {
    const { cityName } = state[NameSpace.Offers];
    const result = getCityName(state);
    expect(result).toBe(cityName);
  });

  it('Should return city location from state', () => {
    const { cityLocation } = state[NameSpace.Offers];
    const result = getCityLocation(state);
    expect(result).toBe(cityLocation);
  });

  it('Should return sorting type from state', () => {
    const { sortingType } = state[NameSpace.Offers];
    const result = getSortingType(state);
    expect(result).toBe(sortingType);
  });

  it('Should return all offers from state', () => {
    const { all } = state[NameSpace.Offers];
    const result = getAllOffers(state);
    expect(result).toBe(all);
  });

  it('Should return sorted offers from state', () => {
    const { sorted } = state[NameSpace.Offers];
    const result = getSortedOffers(state);
    expect(result).toBe(sorted);
  });

  it('Should return offers loading status from state', () => {
    const { status } = state[NameSpace.Offers];
    const result = getOffersStatus(state);
    expect(result).toBe(status);
  });

});
