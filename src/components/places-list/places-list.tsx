// %------------ components ------------% //
import { PlaceCardType } from '../../types';
import { CardListType } from '../../const';
import PlaceCard from '../place-card/place-card';

// ^======================== PlacesList ========================^ //

type PlacesListProps = {
  offers: PlaceCardType[];
  onListItemHover: (id: string) => void;
};

export default function PlacesList(placesListProps: PlacesListProps): JSX.Element {

  const { offers, onListItemHover } = placesListProps;

  const handleListItemHover = (id: string) => {
    onListItemHover(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          cardListType={CardListType.CITIES}
          placeCardData={offer}
          onPlaceCardMouseEnter={handleListItemHover}
        />
      ))}
    </div>
  );
}
