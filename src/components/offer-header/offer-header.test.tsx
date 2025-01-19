import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import OfferHeader from './offer-header';

describe('Component: OfferHeader', () => {
  it('Should render correctly', () => {
    const mockOfferHeaderData = {
      title: faker.string.alpha(),
      rating: faker.number.int(),
      type: faker.string.alpha(),
      bedrooms: faker.number.int(),
      maxAdults: faker.number.int(),
      price: faker.number.int(),
      isPremium: faker.datatype.boolean()
    };
    const offerNameWrapperTestId = 'offer-name-wrapper';
    const offerRatingTestId = 'offer-rating';
    const offerFeaturesTestId = 'offer-features';
    const offerPriceTestId = 'offer-price';

    render(<OfferHeader offerHeaderData={mockOfferHeaderData} />);

    const offerNameWrapper = screen.getByTestId(offerNameWrapperTestId);
    const offerRating = screen.getByTestId(offerRatingTestId);
    const offerFeatures = screen.getByTestId(offerFeaturesTestId);
    const offerPrice = screen.getByTestId(offerPriceTestId);

    expect(offerNameWrapper).toBeInTheDocument();
    expect(offerRating).toBeInTheDocument();
    expect(offerFeatures).toBeInTheDocument();
    expect(offerPrice).toBeInTheDocument();
  });
});
