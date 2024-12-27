import { createAction } from '@reduxjs/toolkit';
import { AppRoute, SortingOption } from '../const';

// %======================== action ========================% //

export const changeCity = createAction<string>('city/changeCity');

export const changeSortingType = createAction<SortingOption>('sorting/changeSortingType');

export const redirectToRoute = createAction<AppRoute>('navigation/redirectToRoute');
