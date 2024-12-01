// *======================== const ========================* //

enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer',
  Login = '/login',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const PLACES_SORTING_OPTIONS: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

const LOCATIONS: string[] = [
  'paris',
  'cologne',
  'brussels',
  'amsterdam',
  'hamburg',
  'dusseldorf',
];

const DATE_FORMAT: string = 'MMMM YYYY';

export { AppRoute, AuthorizationStatus, PLACES_SORTING_OPTIONS, DATE_FORMAT, LOCATIONS };
