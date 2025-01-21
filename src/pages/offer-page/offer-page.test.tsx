import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import OfferPage from './offer-page';

describe('Page: OfferPage', () => {
  it('Should render correctly', () => {
    const offerPageTestId = 'offer-page-element';
    const nearPlacesText = 'Other places in the neighborhood';
    const { withStoreComponent } = withStore(<OfferPage />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByTestId(offerPageTestId));
    expect(screen.getByText(nearPlacesText));
  });
});
