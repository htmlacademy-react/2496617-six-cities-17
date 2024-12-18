import dayjs from 'dayjs';
import { PlaceCardType } from '../types';
import { SortingOptions } from '../const';

// %======================== utils ========================% //
const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

const humanizeTime = (value: string | null | undefined, format: string): string => value ? dayjs(value).format(format) : '';

const convertRating = (rating: number): string => `${Math.round(rating) * 20}%`;

const getOffersByCityName = (offers: PlaceCardType[], cityName: string) => offers.filter((offer) => cityName.toLowerCase() === offer.city.name.toLowerCase());

const getCityLocation = (offers: PlaceCardType[]) => offers[0].city.location;

const compareOffersByLowPrice = (a: PlaceCardType, b: PlaceCardType) => a.price - b.price;
const compareOffersByHighPrice = (a: PlaceCardType, b: PlaceCardType) => b.price - a.price;
const compareOffersByRating = (a: PlaceCardType, b: PlaceCardType) => b.rating - a.rating;

const sortOffers = (offers: PlaceCardType[], sortingType: SortingOptions): PlaceCardType[] => {
  switch (sortingType) {
    case SortingOptions.POPULAR:
      return offers;
    case SortingOptions.BY_LOW_PRICE:
      return [...offers].sort(compareOffersByLowPrice);
    case SortingOptions.BY_HIGHT_PRICE:
      return [...offers].sort(compareOffersByHighPrice);
    case SortingOptions.BY_RATING:
      return [...offers].sort(compareOffersByRating);

    default:
      return offers;
  }
};

export { capitalize, humanizeTime, convertRating, getOffersByCityName, getCityLocation, sortOffers, compareOffersByLowPrice };
