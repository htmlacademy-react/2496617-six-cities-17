import { describe, it } from 'vitest';
import { DataStatus, NameSpace } from '../../const';
import { getOfferData, getOfferStatus } from './offer-process.selectors';

describe('OfferProcess selectors', () => {
  const state = {
    [NameSpace.Offer]: {
      data: null,
      status: DataStatus.Unknown,
    }
  };

  it('Should return offer data from state', () => {
    const { data } = state[NameSpace.Offer];
    const result = getOfferData(state);
    expect(result).toBe(data);
  });

  it('Should return offer data loading status from state', () => {
    const { status } = state[NameSpace.Offer];
    const result = getOfferStatus(state);
    expect(result).toBe(status);
  });
});
