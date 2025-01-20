import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakePlaceCard, makeFakeStore } from '../../utils/mocks';
import PlacesList from './places-list';

describe('Component: PlacesList', () => {
  it('Should render correctly', () => {
    const mockOffers = Array.from({ length: 20 }, makeFakePlaceCard);
    const mockOnListItemEnter = () => { };
    const mockOnListItemLeave = () => { };
    const placesListTestId = 'places-list-element';

    const { withStoreComponent } = withStore(
      <PlacesList
        offers={mockOffers}
        onListItemEnter={mockOnListItemEnter}
        onListItemLeave={mockOnListItemLeave}
      />,
      makeFakeStore()
    );

    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByTestId(placesListTestId)).toBeInTheDocument();
  });
});
