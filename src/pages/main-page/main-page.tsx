import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import MainOffers from '../../components/main-offers/main-offers';
import Map from '../../components/map/map';

// #======================== MainPage ========================# //

export default function MainPage(): JSX.Element {
  return (
    <div className='page page--gray page--main'>

      <Header pageType='any' />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <Locations />
        </div>
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
