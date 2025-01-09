import { memo } from 'react';

// ^======================== OfferGalley ========================^ //
type OfferGalleryProps = {
  images: string[];
};
function OfferGallery(offerGalleryProps: OfferGalleryProps): JSX.Element {
  const { images } = offerGalleryProps;
  return (
    <div className='offer__gallery-container container'>
      <div className='offer__gallery'>

        {images.map((image) => (
          <div
            key={image}
            className='offer__image-wrapper'
          >
            <img
              className='offer__image'
              src={image}
              alt='Photo studio'
            />
          </div>)
        )}

      </div>
    </div>
  );
}

export default memo(OfferGallery);
