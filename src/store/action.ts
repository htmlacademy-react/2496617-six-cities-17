import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

// %======================== action ========================% //

export const redirectToRoute = createAction<AppRoute>('navigation/redirectToRoute');
