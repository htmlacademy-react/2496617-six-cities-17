import { Helmet } from 'react-helmet-async';
import { PlaceCardType, ReviewType, OfferType } from '../../types';
import useScrollToTop from '../../hooks/use-scroll-to-top';

// %------------ components ------------% //
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import Map from '../../components/map/map';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferHeader from '../../components/offer-header/offer-header';
import OfferHost from '../../components/offer-host/offer-host';
import Reviews from '../../components/reviews/reviews';
import NearPlaces from '../../components/near-places/near-places';

// #======================== OfferPage ========================# //

type OfferPageProps = {
  offerData: OfferType;
  nearPlaces: PlaceCardType[];
  reviews: ReviewType[];
};

export default function OfferPage(offerPageProps: OfferPageProps): JSX.Element {
  const { offerData, nearPlaces, reviews } = offerPageProps;

  const { images, rating, type, bedrooms, maxAdults, goods, price, isFavorite, description,
    host: { name, isPro, avatarUrl }, location, isPremium
  } = offerData;

  useScrollToTop();

  return (
    <main className='page__main page__main--offer'>
      <Helmet>
        <title>6 cities - offer</title>
      </Helmet>
      <section className='offer'>

        <OfferGallery images={images} />

        <div className='offer__container container'>
          <div className='offer__wrapper'>

            <OfferHeader
              rating={rating}
              type={type}
              maxAdults={maxAdults}
              bedrooms={bedrooms}
              price={price}
              isFavorite={isFavorite}
              isPremium={isPremium}
            />

            <OfferInside goods={goods} />

            <OfferHost
              name={name}
              isPro={isPro}
              avatarUrl={avatarUrl}
              description={description}
            />

            <Reviews reviews={reviews} />
          </div>
        </div>

        <Map defaultLocation={location} />

      </section>

      <div className='container'>
        <NearPlaces nearPlaces={nearPlaces} />
      </div>
    </main>
  );
}
