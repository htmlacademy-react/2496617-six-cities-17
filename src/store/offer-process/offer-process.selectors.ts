import { NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== offer-process.selectors ========================% //

export const getOfferData = (state: AppState) => state[NameSpace.Offer].data;
export const getOfferStatus = (state: AppState) => state[NameSpace.Offer].status;
