import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import ReviewForm from './review-form';

describe('Component: Review', () => {
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
});
