import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

// %------------ mocks ------------% //
import { OFFER } from './mock/offer';
import { NEAR_PLACES } from './mock/near-places';
import { FAVORITE_OFFERS } from './mock/favorite-offers';
import { REVIEWS } from './mock/reviews.ts';
import { checkAuthAction, fetchOffersAction } from './store/api-action.ts';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App mocks={{ NEAR_PLACES, FAVORITE_OFFERS, REVIEWS, OFFER }} />
    </Provider>
  </React.StrictMode>
);
