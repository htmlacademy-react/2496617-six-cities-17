import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from '../services/api';

// %======================== store ========================% //

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});
