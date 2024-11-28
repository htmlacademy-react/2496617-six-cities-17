import { Helmet } from 'react-helmet-async';
import MainOffers from '../../components/main-offers/main-offers';
import Map from '../../components/map/map';
import Navigation from '../../components/navigation/navigation';

// #======================== MainPage ========================# //

export default function MainPage(): JSX.Element {
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

            <MainOffers />

            <Map />

          </div>
        </div>
      </main>
    </div>
  );
}
