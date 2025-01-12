import { NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== favorite-offers-process.selectors ========================% //

export const getFavoriteOffers = (state: AppState) => state[NameSpace.FavoriteOffers].data;
