import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { DataStatus } from '../../const';
import { getOffersStatus, getSortedOffers } from '../../store/offers-process/offers-process.selectors';
import classNames from 'classnames';

// %------------ components ------------% //
import Navigation from '../../components/navigation/navigation';
import Preloader from '../../components/preloader/preloader';
import Cities from '../../components/cities/cities';
import CitiesEmpty from '../../components/cities-empty/cities-empty';

// #======================== MainPage ========================# //

export default function MainPage(): JSX.Element {

  const offersStatus = useAppSelector(getOffersStatus);
  const sortedOffers = useAppSelector(getSortedOffers);

  if (offersStatus === DataStatus.Loading) {
    return <Preloader />;
  }

  return (
    <main
      className={classNames(
        'page__main page__main--index',
        { 'page__main--index-empty': sortedOffers.length === 0 }
      )}
    >
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className='visually-hidden'>Cities</h1>

      <Navigation />

      {
        sortedOffers.length !== 0
          ? <Cities offers={sortedOffers} />
          : <CitiesEmpty />
      }

    </main>
  );
}
