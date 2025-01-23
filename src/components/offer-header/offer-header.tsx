import { memo } from 'react';
import { capitalize, convertRating } from '../../utils/utils';
import PremiumMark from '../premium-mark/premium-mark';

// ^======================== OfferHeader ========================^ //

type OfferHeaderProps = {
  offerHeaderData: {
    title: string;
    rating: number;
    type: string;
    bedrooms: number;
    maxAdults: number;
    price: number;
    isPremium: boolean;
  };
};

function OfferHeader({ offerHeaderData }: OfferHeaderProps): JSX.Element {

  const { title, rating, type, bedrooms, maxAdults, price, isPremium } = offerHeaderData;

  return (
    <>
      {isPremium && <PremiumMark className='offer__mark' />}

      <div className='offer__name-wrapper' data-testid='offer-name-wrapper'>
        <h1 className='offer__name'>
          {title}
        </h1>
      </div>

      <div className='offer__rating rating' data-testid='offer-rating'>
        <div className='offer__stars rating__stars'>
          <span style={{ width: convertRating(rating) }} />
          <span className='visually-hidden'>Rating</span>
        </div>
        <span className='offer__rating-value rating__value'>{rating}</span>
      </div>

      <ul className='offer__features' data-testid='offer-features'>
        <li className='offer__feature offer__feature--entire'>{capitalize(type)}</li>
        <li className='offer__feature offer__feature--bedrooms'>
          {`${bedrooms} Bedroom${bedrooms > 1 ? 's' : ''}`}
        </li>
        <li className='offer__feature offer__feature--adults'>
          {`Max ${maxAdults} adult${maxAdults > 1 ? 's' : ''}`}
        </li>
      </ul>

      <div className='offer__price' data-testid='offer-price'>
        <b className='offer__price-value'>€{price}</b>
        <span className='offer__price-text'>&nbsp;night</span>
      </div>
    </>
  );
}

export default memo(OfferHeader);
