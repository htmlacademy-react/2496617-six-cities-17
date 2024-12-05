import { Helmet } from 'react-helmet-async';
import { PlaceCardType } from '../../types';
import { useState } from 'react';

// %------------ components ------------% //
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import Navigation from '../../components/navigation/navigation';

// #======================== MainPage ========================# //

type MainPageProps = {
  offers: PlaceCardType[];
};

export default function MainPage(mainPageProps: MainPageProps): JSX.Element {
  const { offers } = mainPageProps;

  const [selectedPoint, setSelectedPoint] = useState<PlaceCardType | undefined>(undefined);

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
                {offers.length} places to stay in Amsterdam
              </b>

              <PlacesSorting />

              <PlacesList
                offers={offers}
                onListItemHover={handleListItemHover}
              />

            </section>

            <div className='cities__right-section'>
              <Map
                defaultLocation={offers[0].city.location}
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
