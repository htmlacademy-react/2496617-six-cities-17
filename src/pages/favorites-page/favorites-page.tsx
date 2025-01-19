import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/favorite-offers-process/favorite-offers-process.selectors';
import { changeCity } from '../../store/offers-process/offers-process.slice';
import { PlaceCardType } from '../../types';

// #======================== FavoritesPage ========================# //

export default function FavoritesPage(): JSX.Element {

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const dispatch = useAppDispatch();

  const offersByCity = favoriteOffers.reduce<Record<string, PlaceCardType[]>>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  const handleCityLinkClick = (city: string) => {
    dispatch(changeCity(city));
  };

  const isOffersByCityEmpty = favoriteOffers.length === 0;

  return (
    <main
      className={classNames(
        'page__main page__main--favorites',
        { 'page__main--favorites-empty': isOffersByCityEmpty }
      )}
    >
      <Helmet>
        <title>6 cities - favorites</title>
      </Helmet>
      <div className='page__favorites-container container'>
        <section
          className={classNames(
            'favorites',
            { 'favorites--empty': isOffersByCityEmpty }
          )}
        >
          {!isOffersByCityEmpty ?
            <><h1 className='favorites__title'>Saved listing</h1>
              <ul className='favorites__list'>
                {Object.entries(offersByCity).map(([city, cityOffers]) => (
                  <li key={city} className='favorites__locations-items'>
                    <div className='favorites__locations locations locations--current'>
                      <div className='locations__item'>
                        <Link
                          className='locations__item-link'
                          to='/'
                          onClick={() => {
                            handleCityLinkClick(city);
                          }}
                        >
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className='favorites__places'>
                      {cityOffers.map((offer) => (
                        <PlaceCard
                          key={offer.id}
                          placeCardData={offer}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </> :
            <>
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </>}
        </section>
      </div>
    </main>
  );
}
