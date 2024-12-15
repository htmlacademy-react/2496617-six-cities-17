import { createAction } from '@reduxjs/toolkit';

// %======================== action ========================% //

export const changeCity = createAction<string>('changeCity');

export const fillOfferList = createAction('fillOfferList');
