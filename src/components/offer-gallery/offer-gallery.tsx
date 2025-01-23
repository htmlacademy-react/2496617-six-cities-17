import { memo } from 'react';
import { SHOWN_PHOTOS_AMOUNT } from '../../const';

// ^======================== OfferGallery ========================^ //

type OfferGalleryProps = {
  images: string[];
};

function OfferGallery(offerGalleryProps: OfferGalleryProps): JSX.Element {
  const { images } = offerGalleryProps;
  return (
    <div
      className='offer__gallery-container container'
      data-testid='offer-gallery-container'
    >
      <div className='offer__gallery'>

        {images.slice(0, SHOWN_PHOTOS_AMOUNT).map((image) => (
          <div
            key={image}
            className='offer__image-wrapper'
          >
            <img
              className='offer__image'
              src={image}
              alt='Photo studio'
              data-testid='offer-gallery-image'
            />
          </div>)
        )}

      </div>
    </div>
  );
}

export default memo(OfferGallery);
