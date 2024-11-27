// *======================== favorites ========================* //

const FAVORITES_CARDS = [
  {
    id: 1,
    location: 'Amsterdam',
    places: [
      {
        id: 1,
        pageType: 'favorites',
        image: 'img/apartment-small-03.jpg',
        isPremium: true,
        price: 180,
        isFavorite: true,
        rating: 5,
        name: 'Nice, cozy, warm big bed apartment',
        type: 'Apartment',
      },
      {
        id: 2,
        pageType: 'favorites',
        image: 'img/room-small.jpg',
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
    id: '764fe695-f984-422e-add8-e369f88ac21a',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 269,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.2
  },
  {
    id: 2,
    location: 'Cologne',
    places: [
      {
        id: 1,
        pageType: 'favorites',
        image: 'img/apartment-small-04.jpg',
        isPremium: false,
        price: 180,
        isFavorite: true,
        rating: 5,
        name: 'White castle',
        type: 'Apartment',
      },
    ]
  }
];

export { FAVORITES_CARDS };
