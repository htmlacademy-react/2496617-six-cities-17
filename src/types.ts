import { AuthorizationStatus, DataStatus, LoginStatus, PostingStatus, SortingOption } from './const';
import { store } from './store';

// %======================== types ========================% //

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type ReviewType = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
};

export type CityType = {
  name: string;
  location: LocationType;
};

export type PlaceCardType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type OfferType = Omit<PlaceCardType, 'previewImage'> & {
  description: string;
  images: string[];
  goods: string[];
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  bedrooms: number;
  maxAdults: number;
};

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type DetailMessageType = {
  type: string;
  message: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type AuthData = {
  email: string;
  password: string;
};

export type AuthResponse = {
  email: string;
  avatarUrl: string;
};

export type ReviewResponse = {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: {
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
};

export type OffersProcess = {
  cityName: string;
  cityLocation: LocationType;
  all: PlaceCardType[];
  sorted: PlaceCardType[];
  sortingType: SortingOption;
  status: DataStatus;
};

export type OfferProcess = {
  data: null | OfferType;
  status: DataStatus;
};

export type AuthProcess = {
  status: AuthorizationStatus;
  login: string;
  avatarUrl: string;
  loginStatus: LoginStatus;
};

export type NearPlacesProcess = {
  data: PlaceCardType[];
  status: DataStatus;
};

export type FavoriteOffersProcess = {
  data: PlaceCardType[];
  status: DataStatus;
};

export type ReviewsProcess = {
  data: ReviewType[];
  status: DataStatus;
  postingStatus: PostingStatus;
};
