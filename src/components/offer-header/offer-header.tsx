import BookmarkButton from '../../ui/bookmark-button/bookmark-button';
import PremiumMark from '../../ui/premium-mark/premium-mark';
import { capitalize, convertRating } from '../../utils/utils';

// ^======================== OfferHeader ========================^ //
type OfferHeaderProps = {
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
};

export default function OfferHeader(offerHeaderProps: OfferHeaderProps): JSX.Element {

  const { rating, type, bedrooms, maxAdults, price, isFavorite, isPremium } = offerHeaderProps;

  return (
    <>
      {isPremium && <PremiumMark className='offer__mark' />}

      <div className='offer__name-wrapper'>
        <h1 className='offer__name'>
          Beautiful &amp; luxurious studio at great location
        </h1>
        <BookmarkButton
          elementClass='offer__bookmark'
          parameters={{ width: 31, height: 33 }}
          isFavorite={isFavorite}
        />
      </div>

      <div className='offer__rating rating'>
        <div className='offer__stars rating__stars'>
          <span style={{ width: convertRating(rating) }} />
          <span className='visually-hidden'>Rating</span>
        </div>
        <span className='offer__rating-value rating__value'>{rating}</span>
      </div>

      <ul className='offer__features'>
        <li className='offer__feature offer__feature--entire'>{capitalize(type)}</li>
        <li className='offer__feature offer__feature--bedrooms'>
          {bedrooms} Bedrooms
        </li>
        <li className='offer__feature offer__feature--adults'>
          Max {maxAdults} adults
        </li>
      </ul>

      <div className='offer__price'>
        <b className='offer__price-value'>€{price}</b>
        <span className='offer__price-text'>&nbsp;night</span>
      </div>
    </>
  );
}
