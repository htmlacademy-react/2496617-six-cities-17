import { describe, expect, it } from 'vitest';
import { DataStatus, DEFAULT_CITY_LOCATION, DEFAULT_CITY_NAME, LOCATIONS, SortingOption } from '../../const';
import { makeFakePlaceCard, makeFakePlaceCardForCity } from '../../utils/mocks';
import { defineCityLocation, getOffersByCityName, sortOffers } from '../../utils/utils';
import { changeCity, changeSortingType, offersProcess } from './offers-process.slice';

describe('OffersProcess Slice', () => {
  const emptyAction = { type: '' };

  it('Should return initial state with empty action', () => {
    const expectedState = {
      cityName: DEFAULT_CITY_NAME,
      cityLocation: DEFAULT_CITY_LOCATION,
      all: Array.from({ length: 120 }, makeFakePlaceCard),
      sorted: Array.from({ length: 20 }, makeFakePlaceCard),
      sortingType: SortingOption.POPULAR,
      status: DataStatus.Unknown,
    };
    const result = offersProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action and undefined state', () => {
    const expectedState = {
      cityName: DEFAULT_CITY_NAME,
      cityLocation: DEFAULT_CITY_LOCATION,
      all: [],
      sorted: [],
      sortingType: SortingOption.POPULAR,
      status: DataStatus.Unknown,
    };
    const result = offersProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Should change city with changeCity action', () => {
    const fakeOffers = [
      ...Array.from({ length: 100 }, () => makeFakePlaceCardForCity(DEFAULT_CITY_NAME)),
      ...Array.from({ length: 20 }, () => makeFakePlaceCardForCity(LOCATIONS[1])),
    ];

    const initialState = {
      cityName: DEFAULT_CITY_NAME,
      cityLocation: DEFAULT_CITY_LOCATION,
      all: fakeOffers,
      sorted: getOffersByCityName(fakeOffers, DEFAULT_CITY_NAME),
      sortingType: SortingOption.POPULAR,
      status: DataStatus.Unknown,
    };
    const expectedState = {
      cityName: LOCATIONS[1],
      cityLocation: defineCityLocation(getOffersByCityName(fakeOffers, LOCATIONS[1])),
      all: fakeOffers,
      sorted: getOffersByCityName(fakeOffers, LOCATIONS[1]),
      sortingType: SortingOption.POPULAR,
      status: DataStatus.Unknown,
    };
    const result = offersProcess.reducer(initialState, changeCity(LOCATIONS[1]));
    expect(result).toEqual(expectedState);
  });

  it('Should change sorting type with changeSortingType action', () => {
    const fakeOffers = [
      ...Array.from({ length: 100 }, () => makeFakePlaceCardForCity(DEFAULT_CITY_NAME)),
      ...Array.from({ length: 20 }, () => makeFakePlaceCardForCity(LOCATIONS[1])),
    ];

    const initialState = {
      cityName: DEFAULT_CITY_NAME,
      cityLocation: DEFAULT_CITY_LOCATION,
      all: fakeOffers,
      sorted: getOffersByCityName(fakeOffers, DEFAULT_CITY_NAME),
      sortingType: SortingOption.POPULAR,
      status: DataStatus.Unknown,
    };

    const expectedState = {
      cityName: DEFAULT_CITY_NAME,
      cityLocation: DEFAULT_CITY_LOCATION,
      all: fakeOffers,
      sorted: sortOffers(getOffersByCityName(fakeOffers, DEFAULT_CITY_NAME), SortingOption.BY_HIGHT_PRICE),
      sortingType: SortingOption.BY_HIGHT_PRICE,
      status: DataStatus.Unknown,
    };

    const result = offersProcess.reducer(initialState, changeSortingType(SortingOption.BY_HIGHT_PRICE));

    expect(result).toEqual(expectedState);
  });
});
