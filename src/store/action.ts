import { createAction } from '@reduxjs/toolkit';
import { SortingOption } from '../const';

// %======================== action ========================% //

export const changeCity = createAction<string>('changeCity');

export const fillOfferList = createAction('fillOfferList');

export const changeSortingType = createAction<SortingOption>('changeSortingType');
