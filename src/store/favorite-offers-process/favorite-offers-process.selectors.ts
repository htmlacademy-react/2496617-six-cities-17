import { NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== favorite-offers-process.selectors ========================% //

export const getFavoriteOffers = (state: Pick<AppState, NameSpace.FavoriteOffers>) => state[NameSpace.FavoriteOffers].data;
export const getFavoriteOffersStatus = (state: Pick<AppState, NameSpace.FavoriteOffers>) => state[NameSpace.FavoriteOffers].status;
