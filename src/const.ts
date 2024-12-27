import { StatusCodes } from 'http-status-codes';

// *======================== const ========================* //
// *------------ data ------------* //
export const LOCATIONS: string[] = [
  'paris',
  'cologne',
  'brussels',
  'amsterdam',
  'hamburg',
  'dusseldorf',
];

export const RATING_OPTIONS = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly'
  },
  {
    value: 1,
    title: 'terribly'
  }
];

export const EMPTY_OFFER = {
  id: '',
  title: '',
  description: '',
  type: '',
  price: 0,
  images: [
    '',
  ],
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    }
  },
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  goods: [
    '',
  ],
  host: {
    isPro: false,
    name: '',
    avatarUrl: '',
  },
  isPremium: false,
  isFavorite: false,
  rating: 0,
  bedrooms: 0,
  maxAdults: 0,
};

// *------------ view ------------* //
export enum CardListType {
  CITIES = 'cities',
  FAVORITES = 'favorites',
  NEAR_PLACES = 'near-places'
}

export enum SortingOption {
  POPULAR = 'Popular',
  BY_LOW_PRICE = 'Price: low to high',
  BY_HIGHT_PRICE = 'Price: high to low',
  BY_RATING = 'Top rated first',
}

export const DATE_FORMAT: string = 'MMMM YYYY';

export const NEAR_PLACES_AMOUNT = 3;

export const SHOWN_REVIEWS_AMOUNT = 10;

export const CommentLength = {
  MIN: 50,
  MAX: 300,
} as const;

export const URL_MARKER_DEFAULT =
  '../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../img/pin-active.svg';

export const DEFAULT_CITY_NAME = 'paris';

export const DEFAULT_CITY_LOCATION = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13
};

export enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Offers = '/offers/:id',
  Login = '/login',
  NotFound = '*'
}

// *------------ network ------------* //
export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  NearPlaces = 'offers/:offerId/nearby',
  Reviews = '/comments/:offerId',
  Favorites = '/favorite'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;


export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: true,
};

export enum DataStatus {
  Unknown = 'unknown',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}
