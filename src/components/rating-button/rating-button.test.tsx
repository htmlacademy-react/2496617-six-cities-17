import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import RatingButton from './rating-button';

describe('Component: RatingButton', () => {
  it('Should render correctly', () => {
    const mockRatingButtonProps = {
      value: faker.number.int(5),
      title: faker.string.alpha(10),
      checked: faker.datatype.boolean(),
      disabled: faker.datatype.boolean(),
      onRatingButtonChange: vi.fn()
    };

    const ratingInputTestId = `rating-input-${mockRatingButtonProps.value}`;
    const ratingLabelTestId = `rating-label-${mockRatingButtonProps.value}`;

    render(
      <RatingButton
        {...mockRatingButtonProps}
      />
    );

    const ratingInput = screen.getByTestId(ratingInputTestId);
    const ratingLabel = screen.getByTestId(ratingLabelTestId);

    expect(ratingInput).toBeInTheDocument();
    expect(ratingLabel).toBeInTheDocument();
  });
});
