import { NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== offer-process.selectors ========================% //

export const getOfferData = (state: Pick<AppState, NameSpace.Offer>) => state[NameSpace.Offer].data;
export const getOfferStatus = (state: Pick<AppState, NameSpace.Offer>) => state[NameSpace.Offer].status;
