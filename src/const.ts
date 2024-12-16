// *======================== const ========================* //

enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Login = '/login',
  NotFound = '*'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum CardListType {
  CITIES = 'cities',
  FAVORITES = 'favorites',
  NEAR_PLACES = 'near-places'
}

enum SortingOptions {
  POPULAR = 'Popular',
  BY_LOW_PRICE = 'Price: low to high',
  BY_HIGHT_PRICE = 'Price: high to low',
  BY_RATING = 'Top rated first',
}

const LOCATIONS: string[] = [
  'paris',
  'cologne',
  'brussels',
  'amsterdam',
  'hamburg',
  'dusseldorf',
];

const RATING_OPTIONS = [
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

const DATE_FORMAT: string = 'MMMM YYYY';

const URL_MARKER_DEFAULT =
  '../img/pin.svg';

const URL_MARKER_CURRENT =
  '../img/pin-active.svg';

const DEFAULT_CITY_NAME = 'paris';

export { AppRoute, AuthorizationStatus, SortingOptions, DATE_FORMAT, LOCATIONS, RATING_OPTIONS, CardListType, URL_MARKER_CURRENT, URL_MARKER_DEFAULT, DEFAULT_CITY_NAME };
