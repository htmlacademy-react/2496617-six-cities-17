import { Helmet } from 'react-helmet-async';
import { PlaceCardType, ReviewType } from '../../types';
import useScrollToTop from '../../hooks/use-scroll-to-top';

// %------------ components ------------% //
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import Map from '../../components/map/map';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferHeader from '../../components/offer-header/offer-header';
import OfferHost from '../../components/offer-host/offer-host';
import Reviews from '../../components/reviews/reviews';
import PlacesList from '../../components/places-list/places-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchOfferAction } from '../../store/api-action';
import { useEffect } from 'react';

// #======================== OfferPage ========================# //

type OfferPageProps = {
  nearPlaces: PlaceCardType[];
  reviews: ReviewType[];
};

export default function OfferPage(offerPageProps: OfferPageProps): JSX.Element {
  useScrollToTop();
  const { nearPlaces, reviews } = offerPageProps;
  const offerData = useAppSelector((state) => state.currentOffer);
  const dispatch = useAppDispatch();

  const { id } = useParams<{
    id: string;
  }>();

  useEffect(() => {
    if (id && (!offerData || offerData.id !== id)) {
      dispatch(fetchOfferAction(id));
    }
  }, [id, offerData, dispatch]);


  if (!offerData || offerData.id !== id) {
    return <div>Loading...</div>;
  }

  const { images, rating, type, bedrooms, maxAdults, goods, price, isFavorite, description,
    host: { name, isPro, avatarUrl }, location, isPremium
  } = offerData;

  const offerHeaderData = { rating, type, maxAdults, bedrooms, price, isFavorite, isPremium };
  const offerHostData = { name, isPro, avatarUrl, description };


  return (
    <main className='page__main page__main--offer'>
      <Helmet>
        <title>6 cities - offer</title>
      </Helmet>
      <section className='offer'>

        <OfferGallery images={images} />

        <div className='offer__container container'>
          <div className='offer__wrapper'>

            <OfferHeader offerHeaderData={offerHeaderData} />

            <OfferInside goods={goods} />

            <OfferHost offerHostData={offerHostData} />

            <Reviews reviews={reviews} />
          </div>
        </div>

        <Map cityLocation={location} offers={nearPlaces} />

      </section>

      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighborhood
          </h2>
          <PlacesList />
        </section>
      </div>
    </main>
  );
}
