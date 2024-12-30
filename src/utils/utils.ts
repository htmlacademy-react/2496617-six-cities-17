import dayjs from 'dayjs';
import { PlaceCardType, ReviewType } from '../types';
import { SortingOption } from '../const';

// %======================== utils ========================% //
const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

const humanizeTime = (value: string | null | undefined, format: string): string => value ? dayjs(value).format(format) : '';

const convertRating = (rating: number): string => `${Math.round(rating) * 20}%`;

const getOffersByCityName = (offers: PlaceCardType[], cityName: string) => offers.filter((offer) => cityName.toLowerCase() === offer.city.name.toLowerCase());

const defineCityLocation = (offers: PlaceCardType[]) => offers[0].city.location;

const compareOffersByLowPrice = (a: PlaceCardType, b: PlaceCardType) => a.price - b.price;
const compareOffersByHighPrice = (a: PlaceCardType, b: PlaceCardType) => b.price - a.price;
const compareOffersByRating = (a: PlaceCardType, b: PlaceCardType) => b.rating - a.rating;

const sortOffers = (offers: PlaceCardType[], sortingType: SortingOption): PlaceCardType[] => {
  switch (sortingType) {
    case SortingOption.POPULAR:
      return offers;
    case SortingOption.BY_LOW_PRICE:
      return [...offers].sort(compareOffersByLowPrice);
    case SortingOption.BY_HIGHT_PRICE:
      return [...offers].sort(compareOffersByHighPrice);
    case SortingOption.BY_RATING:
      return [...offers].sort(compareOffersByRating);

    default:
      return offers;
  }
};

const sortReviews = (reviews: ReviewType[]): ReviewType[] =>
  [...reviews].sort(
    (a: ReviewType, b: ReviewType) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export { capitalize, humanizeTime, convertRating, getOffersByCityName, defineCityLocation, sortOffers, compareOffersByLowPrice, sortReviews };
