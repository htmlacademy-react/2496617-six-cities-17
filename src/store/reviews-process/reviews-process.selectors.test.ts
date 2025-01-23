import { describe, it } from 'vitest';
import { DataStatus, NameSpace, PostingStatus } from '../../const';
import { makeFakeReview } from '../../utils/mocks';
import { getPostingStatus, getReviews, getReviewsStatus } from './reviews-process.selectors';
import { getRandomInteger } from '../../utils/utils';

describe('ReviewsProcess selectors', () => {
  const state = {
    [NameSpace.Reviews]: {
      data: Array.from({length: getRandomInteger(1, 10)}, makeFakeReview),
      status: DataStatus.Unknown,
      postingStatus: PostingStatus.Unknown,
    }
  };

  it('Should return reviews data from state', () => {
    const { data } = state[NameSpace.Reviews];
    const result = getReviews(state);
    expect(result).toBe(data);
  });

  it('Should return reviews data loading status from state', () => {
    const { status } = state[NameSpace.Reviews];
    const result = getReviewsStatus(state);
    expect(result).toBe(status);
  });

  it('Should return review posting status from state', () => {
    const { postingStatus } = state[NameSpace.Reviews];
    const result = getPostingStatus(state);
    expect(result).toBe(postingStatus);
  });
});
