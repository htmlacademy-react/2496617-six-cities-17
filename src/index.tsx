import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

// %------------ mocks ------------% //
import { FAVORITE_OFFERS } from './mock/favorite-offers';
import { checkAuthAction, fetchOffersAction } from './store/api-action.ts';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App mocks={{FAVORITE_OFFERS}} />
    </Provider>
  </React.StrictMode>
);
