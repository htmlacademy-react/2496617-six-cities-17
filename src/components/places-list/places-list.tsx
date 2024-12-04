// %------------ components ------------% //
import { useState } from 'react';
import { PlaceCardType } from '../../types/place-card-type';
import PlaceCard from '../place-card/place-card';
import { CardListType } from '../../const';

// ^======================== PlacesList ========================^ //

type PlacesListProps = {
  offers: PlaceCardType[];
};

export default function PlacesList(placesListProps: PlacesListProps): JSX.Element {

  const { offers } = placesListProps;

  const [activeCard, setActiveCard] = useState<string | null>('');

  const placeCardMouseEnterHandler = (id: string): void => {
    setActiveCard(id);
  };

  const placeCardMouseLeaveHandler = (): void => {
    setActiveCard(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          cardListType={CardListType.CITIES}
          placeCardData={offer}
          onPlaceCardMouseEnter={() => {
            placeCardMouseEnterHandler(offer.title);
          }}
          onPlaceCardMouseLeave={placeCardMouseLeaveHandler}
        />
      ))}
    </div>
  );
}
