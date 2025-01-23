import classNames from 'classnames';
import { memo } from 'react';
import { generatePath, Link, useLocation } from 'react-router-dom';
import { AppRoute, OFFER_PATH_PARAM } from '../../const';
import { PlaceCardType } from '../../types';
import { capitalize, convertRating } from '../../utils/utils';
import BookmarkButton from '../bookmark-button/bookmark-button';
import PremiumMark from '../premium-mark/premium-mark';

type PlaceCardProps = {
  placeCardData: PlaceCardType;
  onPlaceCardMouseEnter?: (id: string) => void;
  onPlaceCardMouseLeave?: () => void;
};

// ^======================== PlaceCard ========================^ //
function PlaceCard({ placeCardData, onPlaceCardMouseEnter, onPlaceCardMouseLeave
}: PlaceCardProps): JSX.Element {

  const path = useLocation().pathname as AppRoute;
  const isMainPage = path === AppRoute.Main;
  const isFavoritesPage = path === AppRoute.Favorites;
  const isOfferPage = path.startsWith(AppRoute.Offer);

  const { id, previewImage, isPremium, price, isFavorite, rating, title, type } = placeCardData;
  return (
    <article
      className={classNames(
        'place-card',
        { 'cities__card': isMainPage },
        { 'favorites__card': isFavoritesPage },
        { 'near-places__card': isOfferPage }
      )}
      onMouseEnter={() => onPlaceCardMouseEnter?.(id)}
      onMouseLeave={() => onPlaceCardMouseLeave?.()}
      data-testid='place-card-element'
    >
      {isPremium && (<PremiumMark className='place-card__mark' />)}

      <div
        className={classNames(
          'place-card__image-wrapper',
          { 'cities__image-wrapper': isMainPage },
          { 'favorites__image-wrapper': isFavoritesPage },
          { 'near-places__image-wrapper': isOfferPage }
        )}
      >
        <Link to={generatePath(`${AppRoute.Offer}${OFFER_PATH_PARAM}`, { id })} >
          <img
            className="place-card__image"
            src={previewImage}
            width={isFavoritesPage ? 150 : 260}
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
        <div className="place-card__rating rating" data-testid='rating-element'>
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${convertRating(rating)}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={generatePath(`${AppRoute.Offer}${OFFER_PATH_PARAM}`, { id })}
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
