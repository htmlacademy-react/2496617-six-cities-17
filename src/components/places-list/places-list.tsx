import classNames from 'classnames';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { PlaceCardType } from '../../types';
import PlaceCard from '../place-card/place-card';
import { AppRoute } from '../../const';

// ^======================== PlacesList ========================^ //

type PlacesListProps = {
  offers: PlaceCardType[];
  onListItemHover?: (id: string) => void;
};

function PlacesList(placesListProps: PlacesListProps): JSX.Element {
  const { onListItemHover, offers } = placesListProps;
  const path = useLocation().pathname as AppRoute;
  const handleListItemHover = (id: string) => onListItemHover?.(id);

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
          onPlaceCardMouseEnter={handleListItemHover}
        />
      ))}
    </div>
  );
}

export default memo(PlacesList);
