import { NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== favorite-offers-process.selectors ========================% //

export const getFavoriteOffers = (state: AppState) => state[NameSpace.FavoriteOffers].data;
export const getFavoriteOffersStatus = (state: AppState) => state[NameSpace.FavoriteOffers].status;
