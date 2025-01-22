import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { NameSpace } from '../../const';
import { withHistory } from '../../utils/mock-components';
import { makeFakeLocation, makeFakeOffer, makeFakePlaceCard, makeFakeStore } from '../../utils/mocks';
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

  it('Should have correct number of markers on the main page', async () => {
    const fakeStore = makeFakeStore();
    const mockOffers = fakeStore[NameSpace.Offers].sorted;

    const mockMapProps = {
      cityLocation: makeFakeLocation(),
      offers: mockOffers,
      selectedPoint: mockOffers[getRandomInteger(0, mockOffers.length - 1)],
    };

    const withHistoryComponent = withHistory(<Map {...mockMapProps} />);

    render(withHistoryComponent);
    await screen.findByTestId('map-element');

    const mapElement = screen.getByTestId('map-element');
    const markers = mapElement.querySelectorAll('.leaflet-marker-icon');
    expect(markers.length).toBe(mockOffers.length);
  });

  it('Should have correct number of markers on the offer page', async () => {
    const fakeStore = makeFakeStore();
    const mockNearPlaces = fakeStore[NameSpace.Offers].sorted;

    const mockMapProps = {
      cityLocation: makeFakeLocation(),
      offers: mockNearPlaces,
      currentOffer: makeFakeOffer()
    };

    const withHistoryComponent = withHistory(<Map {...mockMapProps} />);

    render(withHistoryComponent);
    await screen.findByTestId('map-element');

    const mapElement = screen.getByTestId('map-element');
    const markers = mapElement.querySelectorAll('.leaflet-marker-icon');
    expect(markers.length).toBe(mockNearPlaces.length + 1);

  });
});
