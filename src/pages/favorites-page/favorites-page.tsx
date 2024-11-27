import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';

// #======================== FavoritesPage ========================# //

export default function FavoritesPage(): JSX.Element {
  return (
    <div className='page'>

      <Header pageType='any' />

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>

                  <PlaceCard
                    pageType='favorites'
                    placeCardData={{
                      id: '1',
                      price: 180,
                      rating: 5,
                      previewImage: 'img/apartment-small-03.jpg',
                      isFavorite: true,
                      type: 'Apartment',
                      isPremium: false,
                      title: 'Nice, cozy, warm big bed apartment',
                      city: {},
                      location: {},
                    }}

                  />

                  <PlaceCard
                    pageType='favorites'
                    placeCardData={{
                      id: '1',
                      price: 80,
                      rating: 5,
                      previewImage: 'img/room-small.jpg',
                      isFavorite: true,
                      type: 'Room',
                      isPremium: false,
                      title: 'Wood and stone place',
                      city: {},
                      location: {},
                    }}
                  />
                </div>
              </li>
              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>

                  <PlaceCard
                    pageType='favorites'
                    placeCardData={{
                      id: '1',
                      price: 180,
                      rating: 5,
                      previewImage: 'img/apartment-small-04.jpg',
                      isFavorite: true,
                      type: 'Apartment',
                      isPremium: false,
                      title: 'White castle',
                      city: {},
                      location: {},
                    }}
                  />

                </div>
              </li>

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
