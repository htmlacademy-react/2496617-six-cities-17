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

const PLACES_SORTING_OPTIONS = [
  {
    name: 'Popular',
    isActive: true,
  },
  {
    name: 'Price: low to high',
    isActive: false,
  },
  {
    name: 'Price: high to low',
    isActive: false,
  },
  {
    name: 'Top rated first',
    isActive: false,
  },
];

const DATE_FORMAT: string = 'MMMM YYYY';

export { AppRoute, AuthorizationStatus, PLACES_SORTING_OPTIONS, DATE_FORMAT };
