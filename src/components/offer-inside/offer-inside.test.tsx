import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import OfferInside from './offer-inside';

describe('Component: OfferInside', () => {
  it('Should render correctly', () => {
    const MOCK_GOODS_AMOUNT = 10;
    const mockGoods = Array.from({ length: MOCK_GOODS_AMOUNT }, faker.string.alpha);
    const offerInsideTestId = 'offer-inside';
    const offerGoodTestId = 'offer-good';
    const expectedText = /What's inside/i;

    render(<OfferInside goods={mockGoods} />);
    const offerInside = screen.getByTestId(offerInsideTestId);
    const goods = screen.getAllByTestId(offerGoodTestId);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(offerInside).toBeInTheDocument();
    expect(goods.length).toBe(MOCK_GOODS_AMOUNT);
  });
});
