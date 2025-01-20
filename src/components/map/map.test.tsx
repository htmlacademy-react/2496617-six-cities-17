import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withHistory } from '../../utils/mock-components';
import { makeFakeLocation, makeFakeOffer, makeFakePlaceCard } from '../../utils/mocks';
import { getRandomInteger } from '../../utils/utils';
import Map from './map';

describe('Component: Map', () => {
  it('Should render correctly', () => {
    const mapTestId = 'map-element';
    const mockOffers = Array.from({ length: 10 }, makeFakePlaceCard);
    const mockMapProps = {
      cityLocation: makeFakeLocation(),
      offers: mockOffers,
      selectedPoint: mockOffers[getRandomInteger(0, mockOffers.length - 1)],
      currentOffer: makeFakeOffer(),
    };

    const withHistoryComponent = withHistory(<Map {...mockMapProps} />);

    render(withHistoryComponent);

    expect(screen.getByTestId(mapTestId)).toBeInTheDocument();
  });
});
