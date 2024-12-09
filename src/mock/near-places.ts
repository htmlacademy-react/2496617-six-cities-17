import { PlaceCardType } from '../types';

// *======================== near-places ========================* //

const NEAR_PLACES: PlaceCardType[] = [
  {
    id: 'bf73f0ff-f29e-4133-8ce1-3aa95808d980',
    title: 'Loft Studio in the Central Area',
    type: 'room',
    price: 132,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1
  },
  {
    id: '7f180145-ca37-41d6-b4a4-fa6103eb1438',
    title: 'The Joshua Tree House',
    type: 'apartment',
    price: 370,
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
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.1
  },
  {
    id: '279da314-be3e-4c25-817a-cef0390d2dc7',
    title: 'House in countryside',
    type: 'room',
    price: 128,
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
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: '72280ecd-3e99-4b83-847e-a319490622dc',
    title: 'The house among olive ',
    type: 'apartment',
    price: 360,
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
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.2
  },
  {
    id: 'b311c81e-17c4-47bf-924c-1cda6a42a3e2',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 313,
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
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.4
  },
  {
    id: 'ede2384a-8a01-4376-b794-932c13cea894',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 109,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
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
    isPremium: false,
    rating: 4.4
  },
  {
    id: '99c01b76-cf0a-491d-943a-4b73e774c428',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 173,
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
      latitude: 48.837610000000005,
      longitude: 2.3454990000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.2
  },
  {
    id: '0e10f845-8ee1-4c44-9712-96cbc98f28b4',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 599,
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
      latitude: 48.84761,
      longitude: 2.356499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7
  },
  {
    id: 'bd663aa9-7e39-46de-916d-68b1f78db0ae',
    title: 'Perfectly located Castro',
    type: 'house',
    price: 342,
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
      latitude: 48.862610000000004,
      longitude: 2.369499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6
  },
  {
    id: '3f38babc-4ebc-420c-8aee-f7dbcfad1d2e',
    title: 'The Joshua Tree House',
    type: 'room',
    price: 124,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
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
    isPremium: false,
    rating: 4.8
  },
  {
    id: '46d1f2ab-12ea-400a-b5a8-d43a7b1fe794',
    title: 'House in countryside',
    type: 'house',
    price: 485,
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
      latitude: 48.861610000000006,
      longitude: 2.340499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8
  },
  {
    id: 'ce23a70f-b9bf-48e2-a754-98dcf1a3ee70',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 176,
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
      latitude: 48.87861,
      longitude: 2.357499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.2
  },
  {
    id: '3983232f-9932-48fb-828a-6b3c1467ddbd',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 213,
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
      latitude: 48.877610000000004,
      longitude: 2.333499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.8
  },
  {
    id: '5e15c3b9-1dc3-406d-94f4-cc1c5bb3e125',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 462,
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
      latitude: 48.83961,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.2
  },
  {
    id: '19873cec-ea75-40a2-8cb9-df0151b0ee53',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 288,
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
      latitude: 48.865610000000004,
      longitude: 2.350499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2
  },
  {
    id: 'b2be608a-de53-44b6-bd66-3ae53bfdd70a',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 383,
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
      latitude: 48.846610000000005,
      longitude: 2.374499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.1
  },
  {
    id: '33305e29-fe7e-4df2-b5e6-925a1b0604ad',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 253,
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
      latitude: 48.837610000000005,
      longitude: 2.364499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6
  },
  {
    id: 'd981c557-9652-469d-9053-507e773da7c9',
    title: 'House in countryside',
    type: 'house',
    price: 463,
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
      latitude: 48.843610000000005,
      longitude: 2.338499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.5
  },
  {
    id: '1c140931-ff0f-4e47-b86d-3b69d0591850',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 412,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
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
    rating: 1.9
  }
];

export { NEAR_PLACES };
