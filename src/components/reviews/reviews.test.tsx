import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withStore } from '../../utils/mock-components';
import { makeFakeReview, makeFakeStore } from '../../utils/mocks';
import Reviews from './reviews';

describe('Component: Reviews', () => {
  it('Should render correctly', () => {
    const mockReviews = Array.from({ length: 10 }, makeFakeReview);
    const reviewsTestId = 'reviews-element';
    const expectedHeadingText = /Reviews/i;

    const { withStoreComponent } = withStore(<Reviews reviews={mockReviews} />, makeFakeStore());
    render(withStoreComponent);

    expect(screen.getByTestId(reviewsTestId)).toBeInTheDocument();
    expect(screen.getByText(expectedHeadingText)).toBeInTheDocument();
    mockReviews.forEach((review) => {
      expect(screen.getByText(review.comment)).toBeInTheDocument();
    });
  });
});

