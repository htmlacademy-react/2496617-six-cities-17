import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { browserHistory } from './browser-history/browser-history.ts';
import App from './components/app/app.tsx';
import HistoryRouter from './components/history-router/history-router.tsx';
import { checkAuthAction, fetchFavoriteOffersAction, fetchOffersAction } from './store/api-action.ts';
import { store } from './store/index.ts';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction())
  .then((response) => {
    if (response.meta.requestStatus === 'fulfilled') {
      store.dispatch(fetchFavoriteOffersAction());
    }
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </ HistoryRouter>
    </Provider>
  // </React.StrictMode >
);
