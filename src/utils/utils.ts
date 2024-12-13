import dayjs from 'dayjs';
import { PlaceCardType } from '../types';

// %======================== utils ========================% //
const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

const humanizeTime = (value: string | null | undefined, format: string): string => value ? dayjs(value).format(format) : '';

const convertRating = (rating: number): string => `${Math.round(rating) * 20}%`;

const getOffersByCityName = (offers: PlaceCardType[], cityName: string) => offers.filter((offer) => cityName.toLowerCase() === offer.city.name.toLowerCase());

const getCityLocation = (offers: PlaceCardType[]) => offers[0].city.location;

export { capitalize, humanizeTime, convertRating, getOffersByCityName, getCityLocation };
