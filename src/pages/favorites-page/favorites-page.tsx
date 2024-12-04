import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PlaceCardType } from '../../types/place-card-type';
import { FavoriteOfferType } from '../../types/favorite-offer-type';
import PlaceCard from '../../components/place-card/place-card';
import { CardListType } from '../../const';

// #======================== FavoritesPage ========================# //

type FavoritePageProps = {
  favoriteOffers: PlaceCardType[];
};

export default function FavoritesPage(favoritePageProps: FavoritePageProps): JSX.Element {

  const { favoriteOffers } = favoritePageProps;

  const offersByCity = favoriteOffers.reduce<Record<string, FavoriteOfferType[]>>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

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
                        cardListType={CardListType.FAVORITES}
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
    </div>
  );
}
