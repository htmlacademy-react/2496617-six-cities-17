import { memo } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute, CardListType } from '../../const';
import { PlaceCardType } from '../../types';
import BookmarkButton from '../../ui/bookmark-button/bookmark-button';
import PremiumMark from '../../ui/premium-mark/premium-mark';
import { capitalize, convertRating } from '../../utils/utils';

type PlaceCardProps = {
  cardListType: CardListType;
  placeCardData: PlaceCardType;
  onPlaceCardMouseEnter?: (id: string) => void;
};

// ^======================== PlaceCard ========================^ //
function PlaceCard({
  cardListType, placeCardData, onPlaceCardMouseEnter,
}: PlaceCardProps): JSX.Element {

  const { id, previewImage, isPremium, price, isFavorite, rating, title, type } = placeCardData;
  return (
    <article
      className={`${cardListType}__card place-card`}
      onMouseEnter={() => onPlaceCardMouseEnter?.(id)}
    >
      {isPremium && (<PremiumMark className='place-card__mark' />)}

      <div className={`${cardListType}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offers, { id })} >
          <img
            className="place-card__image"
            src={previewImage}
            width={cardListType === CardListType.FAVORITE ? 150 : 260}
            height="auto"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value ">€{price}&nbsp;</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>

          <BookmarkButton
            elementClass='place-card__bookmark'
            isFavorite={isFavorite}
            sizes={{ width: 18, height: 19 }}
            offerId={id}
          />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${convertRating(rating)}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={generatePath(AppRoute.Offers, { id })}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export default memo(PlaceCard);
