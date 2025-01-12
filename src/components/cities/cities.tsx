import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import { capitalize } from '../../utils/utils';
import { useCallback, useState } from 'react';
import { PlaceCardType } from '../../types';
import { useAppSelector } from '../../hooks';
import { getCityLocation, getCityName } from '../../store/offers-process/offers-process.selectors';

// ^======================== Cities ========================^ //

type CitiesProps = {
  offers: PlaceCardType[];
};

function Cities(citiesProps: CitiesProps): JSX.Element {
  const { offers } = citiesProps;
  const [selectedPoint, setSelectedPoint] = useState<PlaceCardType>();
  const selectedCityName = useAppSelector(getCityName);
  const selectedCityLocation = useAppSelector(getCityLocation);

  const handleListItemHover = useCallback(
    (listItemId: string) => {
      const currentPoint = offers.find((offer) => offer.id === listItemId);
      setSelectedPoint(currentPoint);
    },
    [offers]
  );

  return (
    <div className='cities'>
      <div className='cities__places-container container'>

        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {capitalize(selectedCityName)}
          </b>

          <PlacesSorting />

          <PlacesList
            onListItemHover={handleListItemHover}
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
export default Cities;
