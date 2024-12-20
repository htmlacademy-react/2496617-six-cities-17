import { createAction } from '@reduxjs/toolkit';
import { SortingOption } from '../const';
import { PlaceCardType } from '../types';

// %======================== action ========================% //

export const changeCity = createAction<string>('changeCity');

export const fillOfferList = createAction('fillOfferList');

export const changeSortingType = createAction<SortingOption>('changeSortingType');

export const loadOffers = createAction<PlaceCardType[]>('loadOffers');

export const setError = createAction<string | null>('setError');

export const setDataLoading = createAction<boolean>('setDataLoading');
