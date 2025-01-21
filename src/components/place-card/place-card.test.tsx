import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakePlaceCard, makeFakeStore } from '../../utils/mocks';
import PlaceCard from './place-card';

describe('Component: PlaceCard', () => {
  it('Should render correctly', () => {
    const mockPlaceCardData = makeFakePlaceCard();
    const mockOnPlaceCardMouseEnter = vi.fn();
    const mockOnPlaceCardMouseLeave = vi.fn();
    const placeCardTestId = 'place-card-element';
    const expectedImageAltText = 'Place image';
    const expectedPriceText = new RegExp(`${mockPlaceCardData.price}`);
    const expectedTitle = mockPlaceCardData.title;
    const ratingTestId = 'rating-element';
    const expectedPlaceType = mockPlaceCardData.type;

    const { withStoreComponent } = withStore(
      <PlaceCard
        placeCardData={mockPlaceCardData}
        onPlaceCardMouseEnter={mockOnPlaceCardMouseEnter}
        onPlaceCardMouseLeave={mockOnPlaceCardMouseLeave}
      />,
      makeFakeStore()
    );

    const withHistoryComponent = withHistory(withStoreComponent);


    render(withHistoryComponent);

    expect(screen.getByTestId(placeCardTestId)).toBeInTheDocument();
    expect(screen.getByAltText(expectedImageAltText)).toBeInTheDocument();
    expect(screen.getByText(expectedPriceText)).toBeInTheDocument();
    expect(screen.getByTestId(ratingTestId)).toBeInTheDocument();
    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByText(expectedPlaceType)).toBeInTheDocument();
  });
});
