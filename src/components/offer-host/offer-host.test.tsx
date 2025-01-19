import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import OfferHost from './offer-host';

describe('Component: OfferHost', () => {
  it('Should render correctly', () => {
    const mockOfferHostData = {
      name: faker.person.firstName(),
      isPro: faker.datatype.boolean(),
      avatarUrl: faker.system.filePath(),
      description: faker.lorem.lines(1)
    };
    const offerHostTestId = 'offer-host';

    render(<OfferHost offerHostData={mockOfferHostData} />);
    const offerHost = screen.getByTestId(offerHostTestId);

    expect(offerHost).toBeInTheDocument();
  });
});
