// %------------ components ------------% //
import { CardListType } from '../../const';
import PlaceCard from '../place-card/place-card';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

// ^======================== PlacesList ========================^ //

type PlacesListProps = {
  onListItemHover?: (id: string) => void;
};

export default function PlacesList(placesListProps: PlacesListProps): JSX.Element {
  const {onListItemHover } = placesListProps;
  const path = useLocation().pathname;
  const handleListItemHover = (id: string) => onListItemHover && onListItemHover(id);

  const selectedOffers = useAppSelector((state) => state.offers);

  return (
    <div
      className={classNames(
        'places__list',
        { 'cities__places-list tabs__content': path === '/' },
        { 'near-places__list': path.startsWith('/offer') }
      )}
    >
      {selectedOffers.map((offer) => (
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
