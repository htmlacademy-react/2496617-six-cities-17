import PlaceCard from '../place-card/place-card';
import { OFFERS_CARDS } from '../../mock/offers';
import PlacesSorting from '../places-sorting/places-sorting';

// ^======================== MainOffers ========================^ //

export default function MainOffers(): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>

      <PlacesSorting />

      <div className="cities__places-list places__list tabs__content">
        {OFFERS_CARDS.map((offerCard) => (
          <PlaceCard
            key={offerCard.id}
            pageType="cities"
            placeCardData={offerCard}
          />
        ))}
      </div>
    </section>
  );
}
