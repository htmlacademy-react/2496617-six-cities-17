import { faker } from '@faker-js/faker';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { AuthorizationStatus, DataStatus, DEFAULT_CITY_LOCATION, DEFAULT_CITY_NAME, LoginStatus, NameSpace, PostingStatus, SortingOption } from '../const';
import { createAPI } from '../services/api';
import { AppState, CityType, LocationType, PlaceCardType, ReviewType } from '../types';
import { getOffersByCityName, getRandomInteger } from './utils';

// %============== functions form mock data for tests ==============% //

export const makeFakeLocation = (): LocationType => ({
  latitude: faker.location.latitude(),
  longitude: faker.location.longitude(),
  zoom: faker.number.int()
});

export const makeFakeCity = (): CityType => ({
  name: faker.location.city(),
  location: makeFakeLocation(),
});

export const makeFakePlaceCard = (): PlaceCardType => ({
  id: faker.string.nanoid(),
  title: faker.string.alpha(),
  type: faker.string.alpha(),
  price: faker.number.int(),
  city: makeFakeCity(),
  location: makeFakeLocation(),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  rating: faker.number.int(),
  previewImage: faker.system.filePath()
});

export const makeFakePlaceCardForCity = (cityName: string): PlaceCardType => ({
  ...makeFakePlaceCard(),
  city: {
    ...makeFakePlaceCard().city,
    name: cityName,
  },
});


export const makeFakeReview = (): ReviewType => ({
  id: faker.string.nanoid(),
  comment: faker.lorem.lines(1),
  date: faker.string.numeric(),
  rating: faker.number.int(),
  user: {
    name: faker.person.firstName(),
    avatarUrl: faker.system.filePath(),
    isPro: faker.datatype.boolean(),
  },
});

export const makeFakeReviewData = () => ({
  comment: faker.string.alpha(),
  rating: faker.number.int(),
  offerId: faker.string.nanoid(),
});

export const makeFakeImages = (): string[] => Array.from({ length: getRandomInteger(6, 10) }, () => faker.system.filePath());

export const makeFakeOffer = () => ({
  id: faker.string.nanoid(),
  title: faker.string.alpha(),
  type: faker.string.alpha(),
  price: faker.number.int(),
  city: makeFakeCity(),
  location: makeFakeLocation(),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  rating: faker.number.int(),
  description: faker.string.alpha(),
  images: makeFakeImages(),
  goods: Array.from({ length: getRandomInteger(0, 10) }, () => faker.string.alpha()),
  host: {
    isPro: faker.datatype.boolean(),
    name: faker.person.firstName(),
    avatarUrl: faker.string.alpha(),
  },
  bedrooms: faker.number.int(),
  maxAdults: faker.number.int(),
});

export type AppThunkDispatch = ThunkDispatch<AppState, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeStore = (initialState?: Partial<AppState>): AppState => {
  const mockOffers = Array.from({ length: 120 }, makeFakePlaceCard);
  const mockReviews = Array.from({ length: 10 }, makeFakeReview);
  return {
    [NameSpace.Offers]: {
      cityName: DEFAULT_CITY_NAME,
      cityLocation: DEFAULT_CITY_LOCATION,
      all: mockOffers,
      sorted: getOffersByCityName(mockOffers, DEFAULT_CITY_NAME),
      sortingType: SortingOption.Popular,
      status: DataStatus.Unknown,
    },
    [NameSpace.Auth]: {
      status: AuthorizationStatus.Unknown,
      login: faker.internet.email(),
      avatarUrl: faker.system.filePath(),
      loginStatus: LoginStatus.Unknown,
    },
    [NameSpace.Offer]: {
      data: makeFakeOffer(),
      status: DataStatus.Unknown,
    },
    [NameSpace.FavoriteOffers]: {
      data: mockOffers,
      status: DataStatus.Unknown,
    },
    [NameSpace.NearPlaces]: {
      data: mockOffers,
      status: DataStatus.Unknown,
    },
    [NameSpace.Reviews]: {
      data: mockReviews,
      status: DataStatus.Unknown,
      postingStatus: PostingStatus.Unknown,
    },
    ...initialState ?? {},
  };
};
