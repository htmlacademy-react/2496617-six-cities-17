import { faker } from '@faker-js/faker';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { AppState, PlaceCardType, ReviewType } from '../types';
import { getRandomInteger } from './utils';

// %============== functions form mock data for tests ==============% //

export const makeFakePlaceCard = (): PlaceCardType => ({
  id: faker.string.nanoid(),
  title: faker.string.alpha(),
  type: faker.string.alpha(),
  price: faker.number.int(),
  city: {
    name: faker.location.city(),
    location: {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      zoom: faker.number.int()
    }
  },
  location: {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    zoom: faker.number.int()
  },
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
  comment: faker.string.alpha(),
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
  city: {
    name: faker.location.city(),
    location: {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      zoom: faker.number.int()
    }
  },
  location: {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    zoom: faker.number.int()
  },
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
