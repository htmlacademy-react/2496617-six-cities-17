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
