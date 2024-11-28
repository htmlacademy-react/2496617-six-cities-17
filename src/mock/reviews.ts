import { ReviewType } from '../const';

// *======================== reviews ========================* //

const REVIEWS: ReviewType[] = [
  {
    id: 'da1679ad-4d17-4506-a6d5-3e7fb37b914d',
    comment: 'We loved it so much, the house, the view, the location just great.. Highly recommend :)',
    date: '2024-11-06T21:00:00.490Z',
    rating: 4,
    user: {
      name: 'Jack',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: false
    }
  },
  {
    id: '4ece28ca-843c-4791-beb7-7691f4a47e8b',
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2024-11-06T21:00:00.490Z',
    rating: 3,
    user: {
      name: 'Max',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: true
    }
  },
  {
    id: '2f0cdca5-68b3-43bb-ad0d-838ebe713121',
    comment: 'We loved it so much, the house, the view, the location just great.. Highly recommend :)',
    date: '2024-11-03T21:00:00.490Z',
    rating: 2,
    user: {
      name: 'Jack',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: true
    }
  }
];

export { REVIEWS };
