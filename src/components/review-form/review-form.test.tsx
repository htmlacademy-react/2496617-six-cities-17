import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { APIRoute, NameSpace } from '../../const';
import { postReviewAction } from '../../store/api-action';
import { withHistory, withStore } from '../../utils/mock-components';
import { extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import ReviewForm from './review-form';
import { OfferType } from '../../types';

describe('Component: ReviewForm', () => {
  it('Should render correctly', () => {
    const expectedLabelText = 'Your review';
    const ratingTestId = 'review-rating-element';
    const textareaTestId = 'textarea-element';
    const expectedTextareaPlaceholder = 'Tell how was your stay, what you like and what can be improved';
    const expectedButtonText = 'Submit';

    const { withStoreComponent } = withStore(<ReviewForm />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);
    render(withHistoryComponent);

    expect(screen.getByText(expectedLabelText)).toBeInTheDocument();
    expect(screen.getByTestId(ratingTestId)).toBeInTheDocument();
    expect(screen.getByTestId(textareaTestId)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(expectedTextareaPlaceholder)).toBeInTheDocument();
    expect(screen.getByText(expectedButtonText)).toBeInTheDocument();
  });

  it('Should render correctly when user enter comment', async () => {
    const textareaTestId = 'textarea-element';
    const expectedCommentText = faker.lorem.lines(1);

    const { withStoreComponent } = withStore(<ReviewForm />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);
    render(withHistoryComponent);

    await userEvent.type(
      screen.getByTestId(textareaTestId),
      expectedCommentText
    );

    expect(screen.getByDisplayValue(expectedCommentText)).toBeInTheDocument();
  });

  it('Should dispatch "postReviewAction" when user clicks on submit button', async () => {
    const fakeStore = makeFakeStore();
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<ReviewForm />, fakeStore);

    const mockOfferId = (fakeStore[NameSpace.Offer].data as OfferType).id;
    const mockRatingValue = 5;
    const mockComment = 'This is a test comment that meets the length requirement.';

    mockAxiosAdapter.onPost(APIRoute.Reviews.replace(':offerId', mockOfferId), {
      rating: mockRatingValue,
      comment: mockComment,
    }).reply(200);

    render(withStoreComponent);

    const ratingInput = screen.getByTestId(`rating-input-${mockRatingValue}`);
    const commentInput = screen.getByTestId('textarea-element');
    const submitButton = screen.getByTestId('reviews-submit-button-element');

    await userEvent.click(ratingInput);
    await userEvent.type(commentInput, mockComment);
    await userEvent.click(submitButton);

    const actionTypes = extractActionsTypes(mockStore.getActions());
    expect(actionTypes).toEqual([
      postReviewAction.pending.type,
      postReviewAction.fulfilled.type,
    ]);
  });

});
