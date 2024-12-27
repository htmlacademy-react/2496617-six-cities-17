import { createAction } from '@reduxjs/toolkit';
import { AppRoute, SortingOption } from '../const';

// %======================== action ========================% //

export const changeCity = createAction<string>('city/changeCity');

export const fillOfferList = createAction('offers/fillOfferList');

export const changeSortingType = createAction<SortingOption>('sorting/changeSortingType');

export const setDataLoading = createAction<boolean>('data/setDataLoading');

export const redirectToRoute = createAction<AppRoute>('navigation/redirectToRoute');
