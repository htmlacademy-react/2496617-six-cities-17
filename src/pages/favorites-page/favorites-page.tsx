import { Helmet } from 'react-helmet-async';
import PlaceCard from '../../components/place-card/place-card';
import { FAVORITE_OFFERS } from '../../mock/favorite-offers';
import { Link } from 'react-router-dom';

// #======================== FavoritesPage ========================# //

type FavoriteOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

const offersByCity = FAVORITE_OFFERS.reduce<Record<string, FavoriteOffer[]>>((acc, offer) => {
  const city = offer.city.name;
  if (!acc[city]) {
    acc[city] = [];
  }
  acc[city].push(offer);
  return acc;
}, {});

export default function FavoritesPage(): JSX.Element {
  return (
    <div className='page'>
      <Helmet>
        <title>6 cities - favorites</title>
      </Helmet>

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {Object.entries(offersByCity).map(([city, cityOffers]) => (
                <li key={city} className='favorites__locations-items'>
                  <div className='favorites__locations locations locations--current'>
                    <div className='locations__item'>
                      <Link className='locations__item-link' to='/'>
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className='favorites__places'>
                    {cityOffers.map((offer) => (
                      <PlaceCard
                        key={offer.id}
                        pageType='favorites'
                        placeCardData={offer}
                      />
                    ))}
                  </div>
                </li>
              ))}

            </ul>
          </section>
        </div>
      </main>
      <footer className='footer container'>
        <a className='footer__logo-link' href='main.html'>
          <img
            className='footer__logo'
            src='img/logo.svg'
            alt='6 cities logo'
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}
