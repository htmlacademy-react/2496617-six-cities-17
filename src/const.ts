import { StatusCodes } from 'http-status-codes';

// *======================== const ========================* //
// *------------ data ------------* //
export const LOCATIONS: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
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

export enum NameSpace {
  Auth = 'AUTH',
  City = 'CITY',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  NearPlaces = 'NEAR_PLACES',
  Reviews = 'REVIEWS',
  FavoriteOffers = 'FAVORITE_OFFERS',
}

// *------------ view ------------* //
export enum SortingOption {
  Popular = 'Popular',
  ByLowPrice = 'Price: low to high',
  ByHighPrice = 'Price: high to low',
  ByRating = 'Top rated first',
}

export const DATE_FORMAT: string = 'MMMM YYYY';

export const NEAR_PLACES_AMOUNT = 3;

export const SHOWN_REVIEWS_AMOUNT = 10;

export const SHOWN_PHOTOS_AMOUNT = 6;

export const CommentLength = {
  Min: 50,
  Max: 300,
} as const;

export enum PlaceCardImageWidth {
  General = 260,
  Favorite = 150,
}

export const URL_MARKER_DEFAULT =
  '../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../img/pin-active.svg';

export const DEFAULT_CITY_NAME = 'Paris';

export const DEFAULT_CITY_LOCATION = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13
};

export enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer',
  Login = '/login',
  NotFound = '*'
}

export const OFFER_PATH_PARAM = '/:id';

// *------------ network ------------* //
export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  NearPlaces = '/nearby',
  Reviews = '/comments',
  Favorite = '/favorite'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

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

export enum LoginStatus {
  Unknown = 'unknown',
  Processing = 'processing',
  LoggedIn = 'logged-in',
  Error = 'error',
}
export enum PostingStatus {
  Unknown = 'unknown',
  Posting = 'posting',
  Posted = 'posted',
  Error = 'error',
}
