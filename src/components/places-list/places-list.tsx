// %------------ components ------------% //
import { useState } from 'react';
import { PlaceCardType } from '../../types/place-card-type';
import PlaceCard from '../place-card/place-card';

// ^======================== PlacesList ========================^ //

type PlacesListProps = {
  offers: PlaceCardType[];
};

export default function PlacesList(placesListProps: PlacesListProps): JSX.Element {

  const { offers } = placesListProps;

  const [activeCard, setActiveCard] = useState('');

  const placeCardMouseEnterHandler = (id: string): void => {
    setActiveCard(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          pageType='cities'
          placeCardData={offer}
          onPlaceCardMouseEnter={() => {
            placeCardMouseEnterHandler(offer.title);
          }}
        />
      ))}
    </div>
  );
}

