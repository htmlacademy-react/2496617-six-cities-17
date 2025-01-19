import { NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== near-places-process.selectors ========================% //

export const getNearPlaces = (state: Pick<AppState, NameSpace.NearPlaces>) => state[NameSpace.NearPlaces].data;
export const getNearPlacesStatus = (state: Pick<AppState, NameSpace.NearPlaces>) => state[NameSpace.NearPlaces].status;
