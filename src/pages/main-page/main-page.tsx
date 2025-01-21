import classNames from 'classnames';
import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import CitiesEmpty from '../../components/cities-empty/cities-empty';
import Cities from '../../components/cities/cities';
import Navigation from '../../components/navigation/navigation';
import { useAppSelector } from '../../hooks';
import { getSortedOffers } from '../../store/offers-process/offers-process.selectors';

// #======================== MainPage ========================# //

function MainPage(): JSX.Element {
  const sortedOffers = useAppSelector(getSortedOffers);
  return (
    <main
      className={classNames(
        'page__main page__main--index',
        { 'page__main--index-empty': sortedOffers.length === 0 }
      )}
      data-testid='main-page-element'
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

export default memo(MainPage);
