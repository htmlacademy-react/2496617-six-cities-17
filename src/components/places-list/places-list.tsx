// %------------ components ------------% //
import { CardListType } from '../../const';
import PlaceCard from '../place-card/place-card';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { PlaceCardType } from '../../types';
import { memo } from 'react';

// ^======================== PlacesList ========================^ //

type PlacesListProps = {
  offers: PlaceCardType[];
  onListItemHover?: (id: string) => void;
};

function PlacesList(placesListProps: PlacesListProps): JSX.Element {
  const { onListItemHover, offers } = placesListProps;

  const path = useLocation().pathname;

  const handleListItemHover = (id: string) => onListItemHover?.(id);

  const isOfferPage = path.startsWith('/offer');

  return (
    <div
      className={classNames(
        'places__list',
        { 'cities__places-list tabs__content': path === '/' },
        { 'near-places__list': isOfferPage }
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

export default memo(PlacesList);
