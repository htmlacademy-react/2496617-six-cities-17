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
  const handleListItemHover = (id: string) => onListItemHover?.(id);

  const isOfferPage = path.startsWith('/offer');

  const availableOffers = useAppSelector((state) => state.offers);
  const lastSlicesOfferNumber: number | undefined = isOfferPage ? 3 : undefined;

  return (
    <div
      className={classNames(
        'places__list',
        { 'cities__places-list tabs__content': path === '/' },
        { 'near-places__list': isOfferPage }
      )}
    >
      {availableOffers.slice(0, lastSlicesOfferNumber).map((offer) => (
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
