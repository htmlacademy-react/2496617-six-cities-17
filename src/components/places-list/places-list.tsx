import classNames from 'classnames';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { PlaceCardType } from '../../types';
import PlaceCard from '../place-card/place-card';

// ^======================== PlacesList ========================^ //

type PlacesListProps = {
  offers: PlaceCardType[];
  onListItemEnter?: (id: string) => void;
  onListItemLeave?: () => void;
};

function PlacesList(placesListProps: PlacesListProps): JSX.Element {
  const { onListItemEnter, onListItemLeave, offers } = placesListProps;
  const path = useLocation().pathname as AppRoute;
  const handleListItemEnter = (id: string) => onListItemEnter?.(id);
  const handleListItemLeave = () => onListItemLeave?.();

  return (
    <div
      className={classNames(
        'places__list',
        { 'cities__places-list tabs__content': path === AppRoute.Main },
        { 'near-places__list': path.startsWith('/offer') }
      )}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          placeCardData={offer}
          onPlaceCardMouseEnter={handleListItemEnter}
          onPlaceCardMouseLeave={handleListItemLeave}
        />
      ))}
    </div>
  );
}

export default memo(PlacesList);
