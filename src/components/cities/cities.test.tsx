import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakePlaceCard, makeFakeStore } from '../../utils/mocks';
import Cities from './cities';

describe('Component: Cities', () => {
  it('Should render correctly', () => {
    const citiesTestId = 'cities-element';
    const expectedHeadingText = 'Places';
    const mockOffers = Array.from({ length: 10 }, makeFakePlaceCard);

    const { withStoreComponent } = withStore(<Cities offers={mockOffers} />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByTestId(citiesTestId)).toBeInTheDocument();
    expect(screen.getByText(expectedHeadingText)).toBeInTheDocument();
  });
});
