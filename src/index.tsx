import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';

// %------------ mocks ------------% //
import { OFFERS } from './mock/offers';
import { OFFER } from './mock/offer';
import { NEAR_PLACES } from './mock/near-places';
import { FAVORITE_OFFERS } from './mock/favorite-offers';
import { REVIEWS } from './mock/reviews.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App mocks={{ OFFERS, NEAR_PLACES, FAVORITE_OFFERS, REVIEWS, OFFER }} />
  </React.StrictMode>
);
