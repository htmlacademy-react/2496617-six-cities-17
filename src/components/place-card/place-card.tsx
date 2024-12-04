import classNames from 'classnames';
import { AppRoute, CardListType } from '../../const';
import { PlaceCardType } from '../../types/place-card-type';
import { capitalize, convertRating } from '../../utils/utils';
import { Link } from 'react-router-dom';

// ^======================== place-card ========================^ //

type PlaceCardProps = {
  cardListType: CardListType;
  placeCardData: PlaceCardType;
  onPlaceCardMouseEnter?: () => void;
  onPlaceCardMouseLeave?: () => void;
};

export default function PlaceCard({
  cardListType, placeCardData, onPlaceCardMouseEnter, onPlaceCardMouseLeave
}: PlaceCardProps): JSX.Element {

  const { previewImage, isPremium, price, isFavorite, rating, title, type } = placeCardData;

  return (
    <article
      className={`${cardListType}__card place-card`}
      onMouseEnter={onPlaceCardMouseEnter}
      onMouseLeave={onPlaceCardMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardListType}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardListType === CardListType.FAVORITES ? 150 : 260}
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
          <button
            className={classNames(
              'place-card__bookmark-button', 'button',
              { 'place-card__bookmark-button--active': isFavorite }
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${convertRating(rating)}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}
