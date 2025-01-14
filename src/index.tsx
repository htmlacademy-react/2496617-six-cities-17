import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app.tsx';
import { checkAuthAction, fetchFavoriteOffersAction, fetchOffersAction } from './store/api-action.ts';
import { store } from './store/index.ts';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoriteOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
  //</React.StrictMode>
);
