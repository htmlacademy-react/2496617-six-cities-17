import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { makeFakeReview } from '../../utils/mocks';
import Review from './review';

describe('Component: Review', () => {
  it('Should render correctly', () => {
    const mockReviewProps = makeFakeReview();
    const reviewTestId = 'review';

    render(<Review {...mockReviewProps} />);
    const review = screen.getByTestId(reviewTestId);

    expect(review).toBeInTheDocument();
  });
});
