import { Helmet } from 'react-helmet-async';
import { PlaceCardType } from '../../types';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { capitalize } from '../../utils/utils';

// %------------ components ------------% //
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import Navigation from '../../components/navigation/navigation';

// #======================== MainPage ========================# //

export default function MainPage(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<PlaceCardType>();
  const selectedCityName = useAppSelector((state) => state.cityName);
  const selectedCityLocation = useAppSelector((state) => state.cityLocation);
  const offers = useAppSelector((state) => state.offers);

  const handleListItemHover = (listItemId: string) => {
    const currentPoint = offers.find((offer) => offer.id === listItemId);
    setSelectedPoint(currentPoint);
  };

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
                {offers.length} places to stay in {capitalize(selectedCityName)}
              </b>

              <PlacesSorting />

              <PlacesList
                onListItemHover={handleListItemHover}
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
      </main>
    </div>
  );
}
