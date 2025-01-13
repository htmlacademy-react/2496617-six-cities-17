import dayjs from 'dayjs';
import { PlaceCardType, ReviewType } from '../types';
import { SortingOption } from '../const';

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
    case SortingOption.POPULAR:
      return offers;
    case SortingOption.BY_LOW_PRICE:
      return offers.toSorted(compareOffersByLowPrice);
    case SortingOption.BY_HIGHT_PRICE:
      return offers.toSorted(compareOffersByHighPrice);
    case SortingOption.BY_RATING:
      return offers.toSorted(compareOffersByRating);

    default:
      return offers;
  }
};

export const sortReviews = (reviews: ReviewType[]): ReviewType[] =>
  reviews.toSorted(
    (a: ReviewType, b: ReviewType) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const updateFavoriteStatus = (offers: PlaceCardType[], payload: PlaceCardType, isFavorite: boolean) => offers.map((offer) => offer.id === payload.id ? { ...offer, isFavorite } : offer);
