import { faker } from '@faker-js/faker';
import { describe, it } from 'vitest';
import { DataStatus, PostingStatus } from '../../const';
import { makeFakeReview, makeFakeReviewData } from '../../utils/mocks';
import { getRandomInteger } from '../../utils/utils';
import { fetchReviewsAction, postReviewAction } from '../api-action';
import { reviewsProcess } from './reviews-process.slice';

describe('ReviewsProcess Slice', () => {
  const emptyAction = { type: '' };

  it('Should return initial state with empty action', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Unknown,
      postingStatus: PostingStatus.Unknown,
    };
    const result = reviewsProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action and undefined state', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Unknown,
      postingStatus: PostingStatus.Unknown,
    };
    const result = reviewsProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "loading" with "fetchReviewsAction.pending"', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Loading,
      postingStatus: PostingStatus.Unknown,
    };

    const result = reviewsProcess.reducer(undefined, fetchReviewsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "loaded", "data" to array of reviews with "fetchReviewsAction.fulfilled"', () => {
    const mockReviews = Array.from({ length: getRandomInteger(0, 10) }, makeFakeReview);
    const mockOfferId = faker.string.nanoid();
    const expectedState = {
      data: mockReviews,
      status: DataStatus.Loaded,
      postingStatus: DataStatus.Unknown,
    };
    const result = reviewsProcess.reducer(undefined, fetchReviewsAction.fulfilled(mockReviews, mockOfferId, ''));
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "error" with "fetchReviewsAction.rejected"', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Error,
      postingStatus: DataStatus.Unknown,
    };

    const result = reviewsProcess.reducer(undefined, fetchReviewsAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('Should set "postingStatus" to "posting" with "postReviewAction.pending"', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Unknown,
      postingStatus: PostingStatus.Posting,
    };

    const result = reviewsProcess.reducer(undefined, postReviewAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('Should set "postingStatus" to "posted" and add a review to "data" array with "postReviewAction.fulfilled"', () => {

    const mockReview = makeFakeReview();
    const mockReviewData = makeFakeReviewData();
    const mockOfferId = faker.string.nanoid();
    const initialState = {
      data: [],
      status: DataStatus.Unknown,
      postingStatus: PostingStatus.Unknown,
    };

    const expectedState = {
      data: [mockReview],
      status: DataStatus.Unknown,
      postingStatus: PostingStatus.Posted,
    };

    const result = reviewsProcess.reducer(initialState, postReviewAction.fulfilled(mockReview, mockOfferId, mockReviewData));
    expect(result).toEqual(expectedState);
  });

  it('Should set "postingStatus" to "error" with "postReviewAction.rejected"', () => {
    const expectedState = {
      data: [],
      status: DataStatus.Unknown,
      postingStatus: PostingStatus.Error,
    };

    const result = reviewsProcess.reducer(undefined, postReviewAction.rejected);
    expect(result).toEqual(expectedState);
  });
});
