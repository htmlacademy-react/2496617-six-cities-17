// *======================== offers ========================* //

type PlaceCardType = {
  id: number;
  classModifier: string;
  image: string;
  isPremium: boolean;
  price: number;
  isFavorite: boolean;
  rating: number;
  name: string;
  type: string;
};

const OFFERS_CARDS: PlaceCardType[] = [
  {
    id: 1,
    classModifier: 'cities__card',
    image: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    isFavorite: false,
    rating: 4,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    classModifier: 'cities__card',
    image: 'img/room.jpg',
    isPremium: false,
    price: 80,
    isFavorite: true,
    rating: 4,
    name: 'Wood and stone place',
    type: 'Room',
  },
  {
    id: 3,
    classModifier: 'cities__card',
    image: 'img/apartment-02.jpg',
    isPremium: false,
    price: 132,
    isFavorite: false,
    rating: 4,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    classModifier: 'cities__card',
    image: 'img/apartment-03.jpg',
    isPremium: true,
    price: 180,
    isFavorite: false,
    rating: 5,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 5,
    classModifier: 'cities__card',
    image: 'img/room.jpg',
    isPremium: false,
    price: 80,
    isFavorite: true,
    rating: 4,
    name: 'Wood and stone place',
    type: 'Room',
  },
];

export { OFFERS_CARDS };
export type { PlaceCardType };
