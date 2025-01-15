import { memo, useCallback, useState } from 'react';
import Map from '../../components/map/map';
import PlacesList from '../../components/places-list/places-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import { useAppSelector } from '../../hooks';
import { getCityLocation, getCityName } from '../../store/offers-process/offers-process.selectors';
import { PlaceCardType } from '../../types';

// ^======================== Cities ========================^ //

type CitiesProps = {
  offers: PlaceCardType[];
};

function Cities(citiesProps: CitiesProps): JSX.Element {
  const { offers } = citiesProps;
  const [selectedPoint, setSelectedPoint] = useState<PlaceCardType | undefined>(undefined);
  const selectedCityName = useAppSelector(getCityName);
  const selectedCityLocation = useAppSelector(getCityLocation);

  const handleListItemMouseEnter = useCallback(
    (listItemId: string) => {
      const currentPoint = offers.find((offer) => offer.id === listItemId);
      setSelectedPoint(currentPoint);
    },
    [offers]
  );

  const handleListItemMouseLeave = useCallback(
    () => {
      setSelectedPoint(undefined);
    },
    []
  );

  return (
    <div className='cities'>
      <div className='cities__places-container container'>

        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {`${offers.length} place${offers.length > 1 ? 's' : ''} to stay in ${selectedCityName}`}
          </b>

          <PlacesSorting />

          <PlacesList
            onListItemEnter={handleListItemMouseEnter}
            onListItemLeave={handleListItemMouseLeave}
            offers={offers}
          />

        </section>

        <div className='cities__right-section'>
          <Map
            cityLocation={selectedCityLocation}
            offers={offers}
            selectedPoint={selectedPoint}
          />
        </div>

      </div>
    </div>
  );
}
export default memo(Cities);
