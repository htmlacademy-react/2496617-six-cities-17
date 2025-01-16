import { NameSpace, SortingOption } from '../../const';
import { AppState, PlaceCardType } from '../../types';

// %======================== offers-process.selectors ========================% //

export const getCityName = (state: Pick<AppState, NameSpace.Offers>): string => state[NameSpace.Offers].cityName;
export const getCityLocation = (state: Pick<AppState, NameSpace.Offers>) => state[NameSpace.Offers].cityLocation;

export const getAllOffers = (state: Pick<AppState, NameSpace.Offers>): PlaceCardType[] => state[NameSpace.Offers].all;
export const getSortingType = (state: Pick<AppState, NameSpace.Offers>): SortingOption => state[NameSpace.Offers].sortingType;
export const getSortedOffers = (state: Pick<AppState, NameSpace.Offers>): PlaceCardType[] => state[NameSpace.Offers].sorted;

export const getOffersStatus = (state: Pick<AppState, NameSpace.Offers>) => state[NameSpace.Offers].status;
