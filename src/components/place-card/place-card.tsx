import { PlaceCardType } from '../../const';

// ^======================== place-card ========================^ //

type PlaceCardProps = {
  pageType: string;
  placeCardData: PlaceCardType;
};

export default function PlaceCard({ pageType, placeCardData, }: PlaceCardProps): JSX.Element {
  const { previewImage, isPremium, price, isFavorite, rating, title, type } = placeCardData;
  return (
    <article className={`${pageType}__card place-card`}>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`${pageType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={pageType === 'favorites' ? 150 : 260}
            height="auto"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value ">€{price}&nbsp;</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={
              isFavorite
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
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
            <span style={{ width: `${rating * 2 * 10}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
