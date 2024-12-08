import { PlaceCardType } from '../types';

// *======================== offers ========================* //

const FAVORITE_OFFERS: PlaceCardType[] = [
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
    isFavorite: true,
    isPremium: false,
    rating: 2.2
  },
  {
    id: '08e802c2-e03a-4a4f-b937-ba55d1edfdbc',
    title: 'The house among olive ',
    type: 'apartment',
    price: 496,
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
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.7
  },
  {
    id: '26ab3b22-9c77-4fa8-b7b6-f50627121be1',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 426,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 1.1
  },
  {
    id: 'd205b017-4c27-4543-b9bd-a02db0baa755',
    title: 'House in countryside',
    type: 'house',
    price: 473,
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
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.2
  },
  {
    id: 'b2f72be6-5e8e-4449-bad0-09a675edede7',
    title: 'Waterfront with extraordinary view',
    type: 'room',
    price: 189,
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
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.9
  },
  {
    id: 'd8c89906-2c96-4a0c-8c75-807d8a70b5b0',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 284,
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
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.3
  },
  {
    id: 'daa29dc0-a397-43a0-b049-362e7c49a4bd',
    title: 'Tile House',
    type: 'hotel',
    price: 492,
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
      latitude: 48.834610000000005,
      longitude: 2.364499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9
  },
  {
    id: '9873a028-ab3c-4c30-85c9-8e8daefd02ee',
    title: 'House in countryside',
    type: 'apartment',
    price: 234,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 1.7
  },
  {
    id: '2d55e3bc-6c0c-48dd-a240-34d8457d341b',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 367,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
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
    isFavorite: true,
    isPremium: false,
    rating: 3.6
  },
  {
    id: 'd12088dd-b69d-48f7-9d51-60576a561b0c',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 202,
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
    isFavorite: true,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'da249265-b1e6-40aa-9824-adde7177750b',
    title: 'Tile House',
    type: 'room',
    price: 205,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 2.3
  },
  {
    id: 'f6b64219-e9c0-46a3-9693-13e49222372a',
    title: 'House in countryside',
    type: 'room',
    price: 126,
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
      latitude: 48.861610000000006,
      longitude: 2.340499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.5
  },
  {
    id: '92d07841-b363-4b8e-8013-2406741d7d6a',
    title: 'Wood and stone place',
    type: 'room',
    price: 293,
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
    isFavorite: true,
    isPremium: false,
    rating: 4.1
  },
  {
    id: '987c4fb7-e6e4-4ecc-9c6f-a1537bc7aaaa',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 331,
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
    isFavorite: true,
    isPremium: false,
    rating: 4.9
  },
  {
    id: 'aab3f04c-6574-4ba4-af8b-54c564a145e9',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 219,
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
      latitude: 48.83961,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.5
  },
  {
    id: '16fc7515-711c-4daa-88b6-aabea1b5c9bb',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 348,
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
      latitude: 48.865610000000004,
      longitude: 2.350499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9
  },
  {
    id: '60db2b3e-d7a0-4150-85ae-7eeaa5802d56',
    title: 'The house among olive ',
    type: 'hotel',
    price: 343,
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
      latitude: 48.846610000000005,
      longitude: 2.374499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.4
  },
  {
    id: 'b82c8ac8-8439-43d4-bd8c-74297a7d2bd1',
    title: 'Tile House',
    type: 'hotel',
    price: 337,
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
      longitude: 2.364499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2
  },
  {
    id: 'fd891b82-747c-4584-9cc2-acabf5e0dcde',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 138,
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
      latitude: 48.843610000000005,
      longitude: 2.338499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.6
  },
  {
    id: 'd536ab63-2e85-4155-b251-42c54affb9f1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 456,
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
      latitude: 48.84461,
      longitude: 2.374499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.6
  },
  {
    id: 'ba8ce034-1a56-4170-a499-f8f8a1ef3d89',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 283,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2
  },
  {
    id: 'f170cfbc-1a75-4ed9-893f-e3722a72453d',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 179,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.1
  },
  {
    id: 'b0c066de-c376-4014-a82c-07ef818d5b78',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 814,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.2
  },
  {
    id: 'a05fc475-a549-4c0a-90df-23badb2b7253',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 442,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.947361,
      longitude: 6.9799739999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.1
  },
  {
    id: 'ea46af34-b762-48f5-9711-785dbdec5052',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 945,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.6
  },
  {
    id: 'aeec2c75-bfe5-460f-a794-47b7181e378f',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 280,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.941361,
      longitude: 6.956974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.6
  },
  {
    id: '96eb0039-5d67-465d-9708-52dd49e739ed',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 451,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.916361,
      longitude: 6.944974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.7
  },
  {
    id: '7a0cfcf3-aa35-46c8-a938-5f8bc76680b6',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 254,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.949361,
      longitude: 6.976974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7
  },
  {
    id: '9cf72b55-5e38-4f1f-bd0b-b058c7c4aaf8',
    title: 'Perfectly located Castro',
    type: 'apartment',
    price: 148,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.913361,
      longitude: 6.9509739999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9
  },
  {
    id: 'bc510e0f-25fe-4d6f-b567-9addc93f1891',
    title: 'Tile House',
    type: 'room',
    price: 185,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.930361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.7
  },
  {
    id: 'c87f5ae0-01c2-4b90-849b-2ee86d4051e3',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 221,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.960361,
      longitude: 6.9509739999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.6
  },
  {
    id: 'a3edcf1a-36e0-4410-b037-47b7721b0927',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 498,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.918461,
      longitude: 6.969974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.9
  },
  {
    id: '12cbd78a-0671-4d8a-a591-5728914163eb',
    title: 'Wood and stone place',
    type: 'room',
    price: 283,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.957361,
      longitude: 6.9509739999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2
  },
  {
    id: '55effb9f-237b-4b23-929a-8302e8e629e6',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 203,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.951361,
      longitude: 6.944974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.4
  },
  {
    id: 'a734d8f3-f2c7-4e78-9e48-af652a40d10b',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 665,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.959361,
      longitude: 6.978974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.9
  },
  {
    id: 'abc8311b-7c8c-4a6a-81fb-c0fb7d0091d1',
    title: 'The house among olive ',
    type: 'hotel',
    price: 274,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.960974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.4
  },
  {
    id: '31ce4121-e9cd-4586-96dc-b9c539378210',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: 110,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.954361,
      longitude: 6.982974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.2
  },
  {
    id: '4ba3391f-a937-4ebe-a042-a752a8c7997f',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 129,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.945361,
      longitude: 6.962974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9
  },
  {
    id: 'fdd07eb2-06f1-4e42-bf3c-c1568ea9077d',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 197,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.917361,
      longitude: 6.977974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5
  },
  {
    id: '34fb0537-4407-46d7-b8be-d637d0d5ab5e',
    title: 'Tile House',
    type: 'house',
    price: 841,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.945361,
      longitude: 6.935974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4
  },
  {
    id: 'e3c36407-cd65-445c-946c-61e1e2fcd44d',
    title: 'Perfectly located Castro',
    type: 'apartment',
    price: 478,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.7
  },
  {
    id: '33f7ac7b-291d-461a-b559-3f815a6abe0a',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 459,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.371696999999999,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.3
  },
  {
    id: '45009a5f-863c-4538-af52-6d10c5948415',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 103,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.827557,
      longitude: 4.336697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3
  },
  {
    id: '788c6bf6-63f1-4616-80cf-dbbf2a43deb8',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 458,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.833557,
      longitude: 4.374696999999999,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.3
  },
  {
    id: '9f75dbc4-f9a4-42fd-83f8-c71a7d256a78',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 173,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.837557,
      longitude: 4.339697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2
  },
  {
    id: 'c42d1924-200e-4434-81ac-72ed75ff2482',
    title: 'Tile House',
    type: 'house',
    price: 766,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.849557,
      longitude: 4.374696999999999,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.7
  },
  {
    id: 'f4ab0beb-8d6c-4377-b715-7778803b89f1',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 196,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.852557,
      longitude: 4.3376969999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.7
  },
  {
    id: '02ae1693-e5db-4b12-8b81-95f2aa50117b',
    title: 'The Joshua Tree House',
    type: 'house',
    price: 285,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.828556999999996,
      longitude: 4.362697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.9
  },
  {
    id: '0f7a0af6-0802-45c1-af81-fb44364e7292',
    title: 'Tile House',
    type: 'apartment',
    price: 364,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.835556999999994,
      longitude: 4.354697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.3
  },
  {
    id: '0dda61f8-b5ab-4cf9-a197-c4b8146e6aac',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel',
    price: 356,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.339697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.8
  },
  {
    id: '5175092a-134b-4d14-9e99-434cdaa24aee',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 262,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.839557,
      longitude: 4.346697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.5
  },
  {
    id: '0f80e60b-d733-404c-8c25-1baeb115531c',
    title: 'The house among olive ',
    type: 'apartment',
    price: 214,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.844556999999995,
      longitude: 4.346697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.6
  },
  {
    id: 'c08a8e5f-7ed4-4137-9f7e-d38b12e05915',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 427,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.865556999999995,
      longitude: 4.371696999999999,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.4
  },
  {
    id: 'ad9488dd-166a-4199-a87d-3c7d5458760b',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 888,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.869557,
      longitude: 4.332697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.2
  },
  {
    id: '51dc1dac-f9dd-476b-819d-2db2aae05157',
    title: 'House in countryside',
    type: 'room',
    price: 208,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.860557,
      longitude: 4.376697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2
  },
  {
    id: '6a8603ce-7c7e-4bb0-992b-064ec85204da',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 425,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.862556999999995,
      longitude: 4.375697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.4
  },
  {
    id: '58c8df0e-2662-45cd-b915-02cea72855ef',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 231,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.842557,
      longitude: 4.3536969999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.2
  },
  {
    id: '8449a022-4b83-44cd-8cc7-6e2f995bc0da',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 137,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.822556999999996,
      longitude: 4.347697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.1
  },
  {
    id: 'c02497d7-0984-48e6-8f95-a427f46f7e97',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 251,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.357697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.8
  },
  {
    id: 'ab3edb09-e99f-4a07-8dd8-bf28e5862060',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 355,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.842557,
      longitude: 4.363696999999999,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.3
  },
  {
    id: '032083e8-5d5a-4f47-971a-b7a805f650a7',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 182,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.2
  },
  {
    id: 'eceb388d-1251-416a-a72d-9df79f4558f0',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 388,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.6
  },
  {
    id: '4bebcc66-89cb-4227-b8cf-7f78c03ce1b5',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 837,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.6
  },
  {
    id: 'ca87222c-d1f8-42d3-ba9f-6afb958ae139',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 358,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.7
  },
  {
    id: '50f13fb8-fe49-49d6-a56f-204e157041c3',
    title: 'Wood and stone place',
    type: 'house',
    price: 565,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.367540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.3
  },
  {
    id: '94bd9ad2-1ce2-4ff0-bbbc-bc745cdd74a7',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 216,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.361540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8
  },
  {
    id: '92d2bbf3-6a65-4150-aee4-7ddcecde73cb',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 370,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.35754,
      longitude: 4.9179759999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.9
  },
  {
    id: '7cbd86cc-cd98-4a7a-a76e-b7d83bb37fb3',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 202,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37854,
      longitude: 4.894976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2
  },
  {
    id: '744a435f-92e5-42cc-b926-8d0877243770',
    title: 'The house among olive ',
    type: 'room',
    price: 200,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36854,
      longitude: 4.887976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.1
  },
  {
    id: '1a5febae-820b-4f9a-9c7a-1549b26c56c3',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room',
    price: 199,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.370540000000005,
      longitude: 4.9099759999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1
  },
  {
    id: '883db251-473e-48c0-a991-c71ac513f714',
    title: 'Tile House',
    type: 'room',
    price: 135,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.389540000000004,
      longitude: 4.883976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.1
  },
  {
    id: '0679092a-0c11-4200-a7b3-c8d256266120',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 695,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.35054,
      longitude: 4.908976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.8
  },
  {
    id: '6ba14be1-2d92-40aa-842b-e5fa10baba62',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 255,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37154,
      longitude: 4.889976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.7
  },
  {
    id: 'f79e22a6-b7dc-4784-a436-7314f7c0ce2b',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 356,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.364540000000005,
      longitude: 4.9019759999999994,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.7
  },
  {
    id: '81095726-a0b9-449b-8325-1a3082dba18d',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 151,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36354,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'c3109d2f-2395-4768-b851-d9219fe287f8',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 265,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36354,
      longitude: 4.889976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.5
  },
  {
    id: '99700680-5362-4c4e-9371-f8cbda336040',
    title: 'Tile House',
    type: 'room',
    price: 118,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.388540000000006,
      longitude: 4.899976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.6
  },
  {
    id: 'fd45f293-ba9c-4eae-bb3d-145ce84b0248',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 275,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36954,
      longitude: 4.914976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.2
  },
  {
    id: '806d91cc-caad-4a15-a34b-7274c35aba5a',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 307,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37554,
      longitude: 4.9019759999999994,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.3
  },
  {
    id: 'f4045f6a-8097-4438-a8c5-0ff9913bb6a0',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 172,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.886976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.4
  },
  {
    id: 'e540bc9f-cdec-4a70-9cd1-9ae4049ce4d9',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 279,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.5
  },
  {
    id: '22d960d9-9435-4b47-8684-b3f0f4f26979',
    title: 'The Joshua Tree House',
    type: 'apartment',
    price: 388,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.538341,
      longitude: 9.976654000000002,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.9
  },
  {
    id: '4da1f1fa-036b-486c-a34c-ee3f6e3faa19',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 487,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.563341,
      longitude: 10.019654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.9
  },
  {
    id: '811017a2-6ab6-4a83-92ae-552032fdf087',
    title: 'The house among olive ',
    type: 'room',
    price: 193,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.529341,
      longitude: 9.975654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3
  },
  {
    id: 'a17b4f27-445b-4f51-b926-6c0de35a61f3',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 371,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.565341,
      longitude: 9.980654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.3
  },
  {
    id: '9a956a53-72df-4168-9c98-88b8d5e2ce76',
    title: 'Tile House',
    type: 'room',
    price: 221,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.546341000000005,
      longitude: 10.022654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.1
  },
  {
    id: 'cb7aa0e4-bec5-43a8-b80e-a50d7a6bbbaa',
    title: 'Tile House',
    type: 'apartment',
    price: 189,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.565341000000004,
      longitude: 9.978654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.6
  },
  {
    id: '4b8e0cae-85a8-45c5-9df3-7e6e7a93cbad',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 115,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.570341000000006,
      longitude: 9.975654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.3
  },
  {
    id: '60d56fa7-5ffb-4c09-8a48-5ff0a350dd9c',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 227,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.558341000000006,
      longitude: 10.001654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.7
  },
  {
    id: '914e4173-3fff-434b-aad3-ba7ad6bee9bc',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 252,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.573341000000006,
      longitude: 10.009654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.8
  },
  {
    id: '88d0406a-c8ae-4135-81fc-f3d2e44d547a',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 227,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.573341000000006,
      longitude: 9.994654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.6
  },
  {
    id: 'a3f1db22-72ec-4c63-ba94-1f0c7e84d1a4',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 409,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 9.982654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'b5e72654-2604-454a-a544-e10ad8a697ba',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 223,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.540341000000005,
      longitude: 10.025654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8
  },
  {
    id: '721bd046-3e12-4861-826e-d03a0085eabc',
    title: 'Tile House',
    type: 'house',
    price: 274,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.555341000000006,
      longitude: 9.975654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9
  },
  {
    id: 'dedb3b55-b4c2-4a44-8019-a56a1a80c3d8',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 250,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.534341000000005,
      longitude: 9.998654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.6
  },
  {
    id: '186999ee-90cf-4310-bbaa-97dd893677ee',
    title: 'House in countryside',
    type: 'apartment',
    price: 360,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.563341,
      longitude: 9.975654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.5
  },
  {
    id: '1775c5cd-6229-452b-8ee9-c650d7acd6f2',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 473,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.574341000000004,
      longitude: 10.022654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.4
  },
  {
    id: '8e690a6c-64c8-416f-9b55-972838b841f2',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 418,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.573341000000006,
      longitude: 10.025654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.1
  },
  {
    id: '1256ee34-b226-445b-b43f-19a3e325460d',
    title: 'Wood and stone place',
    type: 'house',
    price: 299,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.550341,
      longitude: 9.980654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4
  },
  {
    id: '2ca36651-5b98-486d-87b6-7f4867485c06',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 403,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.558341000000006,
      longitude: 9.999654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.1
  },
  {
    id: '0991fd6b-3490-48a3-8d16-4a816c58159f',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'hotel',
    price: 119,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.236402000000005,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.8
  },
  {
    id: '8096d6c3-2349-4ed9-b848-961da72bde2d',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 275,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.7
  },
  {
    id: '8cffd9b6-60af-40af-af86-7c5ffdbe2aa9',
    title: 'House in countryside',
    type: 'room',
    price: 148,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.211402,
      longitude: 6.756314000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.9
  },
  {
    id: '0125ba24-6752-4c13-8b5f-ce6722ab9f81',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 403,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.228402,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.9
  },
  {
    id: '46006cc4-e2cc-4930-a308-8e17d1edd813',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 530,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.204402,
      longitude: 6.7773140000000005,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.6
  },
  {
    id: 'f08a9b48-0efd-46ba-8b82-6a3b80f2eb5a',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 111,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.217402,
      longitude: 6.7693140000000005,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.3
  },
  {
    id: '6a1561d2-5822-4745-8f12-8a6b7d9cecd1',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 239,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.241402,
      longitude: 6.782314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8
  },
  {
    id: 'ff8cbe41-e879-4262-b6d2-229a132d1521',
    title: 'The house among olive ',
    type: 'house',
    price: 285,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.235402,
      longitude: 6.800314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.1
  },
  {
    id: '1b05eb70-538a-4f32-b085-5ee8c249e1ae',
    title: 'Tile House',
    type: 'house',
    price: 620,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.237402,
      longitude: 6.779314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.8
  },
  {
    id: '09a959c4-35cf-4dbb-b686-13a5c07a8bab',
    title: 'The Joshua Tree House',
    type: 'house',
    price: 474,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.237402,
      longitude: 6.797314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.4
  },
  {
    id: '0f405a32-81d9-4406-a0e9-9199bc1e756d',
    title: 'Wood and stone place',
    type: 'house',
    price: 478,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.222402,
      longitude: 6.786314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.6
  },
  {
    id: '7220271b-7d06-4ad0-a8cc-969f16709304',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 143,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.232402,
      longitude: 6.800314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.2
  },
  {
    id: 'c2ec87bd-ea4c-49dc-91d7-1759321678bf',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 230,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.216402,
      longitude: 6.758314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.1
  },
  {
    id: '343d1640-82b3-483b-a17a-518a37f26b95',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 143,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.205402,
      longitude: 6.7613140000000005,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.3
  },
  {
    id: 'f9865c89-5a9f-4009-bd64-08f3bab93c0a',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 380,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.248402000000006,
      longitude: 6.763314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.1
  },
  {
    id: '4c2e3cf6-4436-4ede-bca2-8aaf0a1204a3',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 223,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.250402,
      longitude: 6.7853140000000005,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.7
  },
  {
    id: 'e04fbeab-e60b-459f-8156-b4e4a8c5a93a',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 394,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.239402000000005,
      longitude: 6.756314000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.1
  },
  {
    id: '49b06578-fc53-4b64-9ad1-179808d2b6be',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 154,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.243402,
      longitude: 6.791314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'e6fd86f2-cb1c-4102-ba7b-aaff49605924',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 292,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.214402,
      longitude: 6.764314000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.6
  },
  {
    id: '91cf1316-4cd3-4c41-b046-244002c77621',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 185,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.225402,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3
  }
];

export { FAVORITE_OFFERS };
