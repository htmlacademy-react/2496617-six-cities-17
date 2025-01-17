import { faker } from '@faker-js/faker';
import { PlaceCardType, ReviewType } from '../types';
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
  images: Array.from({ length: getRandomInteger(0, 10) }, () => faker.system.filePath()),
  goods: Array.from({ length: getRandomInteger(0, 10) }, () => faker.string.alpha()),
  host: {
    isPro: faker.datatype.boolean(),
    name: faker.person.firstName(),
    avatarUrl: faker.string.alpha(),
  },
  bedrooms: faker.number.int(),
  maxAdults: faker.number.int(),
});
