// *======================== const ========================* //

type PlaceCardType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

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
    id: 1,
    name: 'Popular',
    isActive: true,
  },
  {
    id: 2,
    name: 'Price: low to high',
    isActive: false,
  },
  {
    id: 3,
    name: 'Price: high to low',
    isActive: false,
  },
  {
    id: 4,
    name: 'Top rated first',
    isActive: false,
  },
];

const DATE_FORMAT: string = 'MMMM YYYY';
export { AppRoute, AuthorizationStatus, PLACES_SORTING_OPTIONS, DATE_FORMAT };
export type { PlaceCardType };
