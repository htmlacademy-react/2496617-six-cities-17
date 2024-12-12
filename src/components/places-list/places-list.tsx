// %------------ components ------------% //
import { PlaceCardType } from '../../types';
import { CardListType } from '../../const';
import PlaceCard from '../place-card/place-card';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

// ^======================== PlacesList ========================^ //

type PlacesListProps = {
  offers: PlaceCardType[];
  onListItemHover?: (id: string) => void;
};

export default function PlacesList(placesListProps: PlacesListProps): JSX.Element {

  const { offers, onListItemHover } = placesListProps;
  const path = useLocation().pathname;
  const handleListItemHover = (id: string) => onListItemHover && onListItemHover(id);

  const selectedCityName = useAppSelector((state) => state.city);
  const selectedOffers = offers.filter((offer) => selectedCityName.toLowerCase() === offer.city.name.toLowerCase());

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
