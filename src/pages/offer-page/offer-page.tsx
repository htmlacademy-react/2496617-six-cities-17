import { Helmet } from 'react-helmet-async';
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
import { Navigate, useParams } from 'react-router-dom';
import { fetchNearPlacesAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-action';
import { useEffect } from 'react';
import { AppRoute, DataStatus, NEAR_PLACES_AMOUNT } from '../../const';
import Preloader from '../../components/preloader/preloader';
import { getNearPlaces, getOfferData, getOfferStatus, getReviews } from '../../store/selectors';

// #======================== OfferPage ========================# //

export default function OfferPage(): JSX.Element {
  useScrollToTop();
  const offerData = useAppSelector(getOfferData);
  const offerStatus = useAppSelector(getOfferStatus);
  const nearPlaces = useAppSelector(getNearPlaces).slice(0, NEAR_PLACES_AMOUNT);
  const reviews = useAppSelector(getReviews);

  const dispatch = useAppDispatch();

  const { id } = useParams<{
    id: string;
  }>();

  useEffect(() => {
    if (id && offerData.id !== id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearPlacesAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, offerData.id, dispatch]);


  if (offerData.id !== id) {
    if (offerStatus === DataStatus.Error) {
      return <Navigate to={AppRoute.NotFound} />;
    }
    return <Preloader />;
  }

  const { title, images, rating, type, bedrooms, maxAdults, goods, price, isFavorite, description,
    host: { name, isPro, avatarUrl }, location, isPremium
  } = offerData;

  const offerHeaderData = { title, rating, type, maxAdults, bedrooms, price, isFavorite, isPremium };
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

            <Reviews reviews={reviews} offerId={id} />
          </div>
        </div>

        <Map cityLocation={location} offers={nearPlaces} />

      </section>

      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighborhood
          </h2>
          <PlacesList offers={nearPlaces} />
        </section>
      </div>
    </main>
  );
}
