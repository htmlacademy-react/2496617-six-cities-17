import { describe, it } from 'vitest';
import { DataStatus, NameSpace } from '../../const';
import { getNearPlaces, getNearPlacesStatus } from './near-places-process.selectors';
import { makeFakePlaceCard } from '../../utils/mocks';
import { getRandomInteger } from '../../utils/utils';

describe('NearPlaces selectors', () => {
  const state = {
    [NameSpace.NearPlaces]: {
      data: Array.from({length: getRandomInteger(0, 10)}, makeFakePlaceCard),
      status: DataStatus.Unknown
    }
  };

  it('Should return near places data from state', () => {
    const { data } = state[NameSpace.NearPlaces];
    const result = getNearPlaces(state);
    expect(result).toBe(data);
  });

  it('Should return near places loading status from state', () => {
    const { status } = state[NameSpace.NearPlaces];
    const result = getNearPlacesStatus(state);
    expect(result).toBe(status);
  });
});

