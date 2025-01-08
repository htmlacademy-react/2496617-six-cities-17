import { Helmet } from 'react-helmet-async';
import { PlaceCardType } from '../../types';
import { useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { capitalize } from '../../utils/utils';
import { DataStatus } from '../../const';
import { getCityLocation, getCityName, getOffersStatus, getSortedOffers } from '../../store/offers-process/offers-process.selectors';

// %------------ components ------------% //
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import Navigation from '../../components/navigation/navigation';
import Preloader from '../../components/preloader/preloader';

// #======================== MainPage ========================# //

export default function MainPage(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<PlaceCardType>();
  const selectedCityName = useAppSelector(getCityName);
  const selectedCityLocation = useAppSelector(getCityLocation);
  const sortedOffers = useAppSelector(getSortedOffers);
  const offersStatus = useAppSelector(getOffersStatus);

  const handleListItemHover = useCallback(
    (listItemId: string) => {
      const currentPoint = sortedOffers.find((offer) => offer.id === listItemId);
      setSelectedPoint(currentPoint);
    },
    [sortedOffers]
  );

  if (offersStatus === DataStatus.Loading) {
    return <Preloader />;
  }

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>

        <Navigation />

        <div className='cities'>
          <div className='cities__places-container container'>

            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedOffers.length} places to stay in {capitalize(selectedCityName)}
              </b>

              <PlacesSorting />

              <PlacesList
                onListItemHover={handleListItemHover}
                offers={sortedOffers}
              />

            </section>

            <div className='cities__right-section'>
              <Map
                cityLocation={selectedCityLocation}
                offers={sortedOffers}
                selectedPoint={selectedPoint}
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
