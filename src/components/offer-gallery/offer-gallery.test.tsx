import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { SHOWN_PHOTOS_AMOUNT } from '../../const';
import { makeFakeImages } from '../../utils/mocks';
import OfferGallery from './offer-gallery';

describe('Component: OfferGallery', () => {
  it('Should render correctly', () => {
    const fakeImages = makeFakeImages();
    const offerGalleryContainerTestId = 'offer-gallery-container';
    const offerGalleryImageTestId = 'offer-gallery-image';

    render(<OfferGallery images={fakeImages} />);

    const offerGalleryContainer = screen.getByTestId(offerGalleryContainerTestId);
    const offerGalleryImages = screen.getAllByTestId(offerGalleryImageTestId);

    expect(offerGalleryContainer).toBeInTheDocument();
    expect(offerGalleryImages.length).toBe(SHOWN_PHOTOS_AMOUNT);
  });
});
