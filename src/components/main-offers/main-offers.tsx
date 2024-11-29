import { nanoid } from '@reduxjs/toolkit';
import { PlaceCardType } from '../../types/place-card-type';

// %------------ components ------------% //
import PlaceCard from '../place-card/place-card';
import PlacesSorting from '../places-sorting/places-sorting';

// ^======================== MainOffers ========================^ //
type MainOffersProps = {
  offers: PlaceCardType[];
};
export default function MainOffers(mainOffersProps: MainOffersProps): JSX.Element {
  const { offers } = mainOffersProps;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>

      <PlacesSorting />

      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard
            key={nanoid()}
            pageType="cities"
            placeCardData={offer}
          />
        ))}
      </div>
    </section>
  );
}
