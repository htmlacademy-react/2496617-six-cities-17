// %------------ components ------------% //
import { PlaceCardType } from '../../types';
import { CardListType } from '../../const';
import PlaceCard from '../place-card/place-card';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

// ^======================== PlacesList ========================^ //

type PlacesListProps = {
  offers: PlaceCardType[];
  onListItemHover?: (id: string) => void;
};

export default function PlacesList(placesListProps: PlacesListProps): JSX.Element {

  const { offers, onListItemHover } = placesListProps;

  const handleListItemHover = (id: string) => onListItemHover && onListItemHover(id);

  const path = useLocation().pathname;

  return (
    <div
      className={classNames(
        'places__list',
        { 'cities__places-list tabs__content': path === '/' },
        { 'near-places__list': path.startsWith('/offer') }
      )}
    >
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
