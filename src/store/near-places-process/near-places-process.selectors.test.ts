import { describe, it } from 'vitest';
import { DataStatus, NameSpace } from '../../const';
import { getNearPlaces, getNearPlacesStatus } from './near-places-process.selectors';

describe('NearPlaces selectors', () => {
  const state = {
    [NameSpace.NearPlaces]: {
      data: [],
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

