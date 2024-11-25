// *======================== favorites ========================* //

const FAVORITES_CARDS = [
  {
    id: 1,
    location: 'Amsterdam',
    places: [
      {
        id: 1,
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
        image: 'img/room.jpg',
        isPremium: false,
        price: 80,
        isFavorite: true,
        rating: 4,
        name: 'Wood and stone place',
        type: 'Room',
      },
    ]
  },
  {
    id: 2,
    location: 'Cologne',
    places: [
      {
        id: 1,
        image: 'img/apartment-02.jpg',
        isPremium: true,
        price: 180,
        isFavorite: false,
        rating: 5,
        name: 'White Castle',
        type: 'Apartment',
      },
    ]
  }
];

export { FAVORITES_CARDS };
