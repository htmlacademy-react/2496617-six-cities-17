import { NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== near-places-process.selectors ========================% //

export const getNearPlaces = (state: AppState) => state[NameSpace.NearPlaces].data;
export const getNearPlacesStatus = (state: AppState) => state[NameSpace.NearPlaces].status;
