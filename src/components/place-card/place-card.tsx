// ^======================== offer-card ========================^ //

import { PlaceCardType } from '../../mock/offers';

export default function PlaceCard({ classModifier, image, isPremium, price, isFavorite, rating, name, type }: PlaceCardType): JSX.Element {
  return (
    <article
      className={`${classModifier} place-card`}
    >
      {
        isPremium ?
          <div className='place-card__mark'>
            <span>Premium</span>
          </div>
          : null
      }
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='#'>
          <img
            className='place-card__image'
            src={image}
            width={260}
            height={200}
            alt='Place image'
          />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value '>€{price}&nbsp;</b>
            <span className='place-card__price-text'>/&nbsp;night</span>
          </div>
          <button
            className={
              isFavorite
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
            type='button'
          >
            <svg
              className='place-card__bookmark-icon'
              width={18}
              height={19}
            >
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${rating * 2 * 10}%` }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>
            {name}
          </a>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}
