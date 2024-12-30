import { NameSpace, SortingOption } from '../../const';
import { AppState, PlaceCardType } from '../../types';

// %======================== offers-process.selectors ========================% //

export const getCityName = (state: AppState): string => state[NameSpace.Offers].cityName;
export const getCityLocation = (state: AppState) => state[NameSpace.Offers].cityLocation;

export const getAllOffers = (state: AppState): PlaceCardType[] => state[NameSpace.Offers].all;
export const getSortingType = (state: AppState): SortingOption => state[NameSpace.Offers].sortingType;
export const getSortedOffers = (state: AppState): PlaceCardType[] => state[NameSpace.Offers].sorted;

export const getOffersStatus = (state: AppState) => state[NameSpace.Offers].status;
