import { createAction } from '@reduxjs/toolkit';
import { SortingOptions } from '../const';

// %======================== action ========================% //

export const changeCity = createAction<string>('changeCity');

export const fillOfferList = createAction('fillOfferList');

export const changeSortingType = createAction<SortingOptions>('changeSortingType');
