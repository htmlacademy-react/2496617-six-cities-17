import { CardListType } from '../../const';
import { PlaceCardType } from '../../types';
import PlaceCard from '../place-card/place-card';

// ^======================== NearPlaces ========================^ //

export default function NearPlaces({ nearPlaces }: { nearPlaces: PlaceCardType[] }): JSX.Element {
  return (
    <section className='near-places places'>
      <h2 className='near-places__title'>
        Other places in the neighborhood
      </h2>
      <div className='near-places__list places__list'>
        {nearPlaces.map((nearPlace) => (
          <PlaceCard
            cardListType={CardListType.NEAR_PLACES}
            key={nearPlace.id}
            placeCardData={nearPlace}
          />
        ))}
      </div>
    </section>
  );
}
