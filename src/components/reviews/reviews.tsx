import Review from '../../components/review/review';
import ReviewForm from '../../components/review-form/review-form';
import { ReviewType } from '../../types';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, SHOWN_REVIEWS_AMOUNT } from '../../const';
import { sortReviews } from '../../utils/utils';
import { getAuthStatus } from '../../store/selectors';

// ^======================== Reviews ========================^ //

type ReviewsProps = {
  reviews: ReviewType[];
  offerId: string;
};

export default function Reviews({ reviews, offerId }: ReviewsProps): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthStatus);
  const shownReviews = sortReviews(reviews).slice(0, SHOWN_REVIEWS_AMOUNT);

  return (
    <section className='offer__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews · <span className='reviews__amount'>{reviews.length}</span>
      </h2>
      <ul className='reviews__list'>
        {shownReviews.map((review) => (
          <Review
            key={review.id}
            {...review}
          />
        ))}
      </ul>

      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm offerId={offerId} />}


    </section>
  );
}
