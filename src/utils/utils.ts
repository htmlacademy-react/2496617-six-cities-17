import dayjs from 'dayjs';
import { SortingOption } from '../const';
import { PlaceCardType, ReviewType } from '../types';

// %======================== utils ========================% //
export const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

export const humanizeTime = (value: string | null | undefined, format: string): string => value ? dayjs(value).format(format) : '';

export const convertRating = (rating: number): string => `${Math.round(rating) * 20}%`;

export const getOffersByCityName = (offers: PlaceCardType[], cityName: string) => offers.filter((offer) => cityName === offer.city.name);

export const defineCityLocation = (offers: PlaceCardType[]) => offers[0]?.city.location;

export const compareOffersByLowPrice = (a: PlaceCardType, b: PlaceCardType) => a.price - b.price;
export const compareOffersByHighPrice = (a: PlaceCardType, b: PlaceCardType) => b.price - a.price;
export const compareOffersByRating = (a: PlaceCardType, b: PlaceCardType) => b.rating - a.rating;

export const sortOffers = (offers: PlaceCardType[], sortingType: SortingOption): PlaceCardType[] => {
  switch (sortingType) {
    case SortingOption.Popular:
      return offers;
    case SortingOption.ByLowPrice:
      return [...offers.sort(compareOffersByLowPrice)];
    case SortingOption.ByHighPrice:
      return [...offers.sort(compareOffersByHighPrice)];
    case SortingOption.ByRating:
      return [...offers.sort(compareOffersByRating)];

    default:
      return offers;
  }
};

export const sortReviews = (reviews: ReviewType[]): ReviewType[] =>
  [...reviews.sort(
    (a: ReviewType, b: ReviewType) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  )];

export const updateFavoriteStatus = (offers: PlaceCardType[], payload: PlaceCardType, isFavorite: boolean) => offers.map((offer) => offer.id === payload.id ? { ...offer, isFavorite } : offer);

export const getRandomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
