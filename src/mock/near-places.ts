import { PlaceCardType } from '../const';

// *======================== near-places ========================* //

const NEAR_PLACES: PlaceCardType[] = [
  {
    id: 'ae9218e7-dfe9-4d3d-b807-a0fdff9d0a58',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 198,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
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
    id: 'ab1dea79-819e-48a3-9800-bfd4aab82c38',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 195,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.3
  },
  {
    id: '66d7ec91-8f59-44a5-8bf8-554ad3f486a7',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 375,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.7
  },
  {
    id: 'bedf4b45-f404-4cb0-bb3f-e62e3936fc0d',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 159,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7
  },
  {
    id: '6a89e1df-ba50-41ad-88b1-5269fe98f8e2',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 512,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.4
  },
  {
    id: '09bde127-7ef9-4237-8ede-7f45101e79e8',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 479,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.364499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2
  },
  {
    id: '7c84ab50-7856-4e96-bd16-96a8b7329cd9',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 703,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.837610000000005,
      longitude: 2.3454990000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.6
  },
  {
    id: 'a53c3fa1-1138-4615-b3a3-3bc1ba50fd8c',
    title: 'The Joshua Tree House',
    type: 'house',
    price: 932,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.84761,
      longitude: 2.356499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.2
  },
  {
    id: 'cb0b4fc2-24a5-4250-a3cf-88ff407b76d5',
    title: 'Wood and stone place',
    type: 'house',
    price: 143,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.862610000000004,
      longitude: 2.369499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.6
  },
  {
    id: 'ee722b2a-35b5-4e24-98e9-fc058c6db438',
    title: 'House in countryside',
    type: 'room',
    price: 148,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.83861,
      longitude: 2.350499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9
  },
  {
    id: '7e8aab12-3d3d-4658-a190-749c0f93d4bf',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 229,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.861610000000006,
      longitude: 2.340499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.4
  },
  {
    id: '01e29398-3423-4a96-a5d9-60b2d35aa959',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 495,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87861,
      longitude: 2.357499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.2
  },
  {
    id: '8dd5e048-c97a-4ed6-875d-4c0511ac5f10',
    title: 'Loft Studio in the Central Area',
    type: 'room',
    price: 204,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.877610000000004,
      longitude: 2.333499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.8
  },
  {
    id: '2a63998f-a548-429c-bd2e-e5579a649d23',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 551,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.83961,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7
  },
  {
    id: 'c40df209-317a-4d25-b650-603e7ee85eb0',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 472,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.865610000000004,
      longitude: 2.350499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6
  },
  {
    id: '5d9b003e-e041-4111-99e8-227d18c9df70',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 248,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.846610000000005,
      longitude: 2.374499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'ad6106c5-b1d1-451a-8da0-90bf8df03acf',
    title: 'Perfectly located Castro',
    type: 'house',
    price: 572,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.837610000000005,
      longitude: 2.364499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.7
  },
  {
    id: '5d79a599-2d5a-40e5-8b72-3d916a1a9c24',
    title: 'Perfectly located Castro',
    type: 'apartment',
    price: 219,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.843610000000005,
      longitude: 2.338499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 5
  },
  {
    id: 'c4a22d9f-ebe4-4362-9891-06f618ff4052',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 989,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.84461,
      longitude: 2.374499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2
  }
];

export { NEAR_PLACES };
