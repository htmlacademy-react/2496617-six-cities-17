import { memo } from 'react';
import ReviewForm from '../../components/review-form/review-form';
import Review from '../../components/review/review';
import { AuthorizationStatus, SHOWN_REVIEWS_AMOUNT } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/auth-process/auth-process.selectors';
import { ReviewType } from '../../types';
import { sortReviews } from '../../utils/utils';

// ^======================== Reviews ========================^ //

type ReviewsProps = {
  reviews: ReviewType[];
};

function Reviews({ reviews }: ReviewsProps): JSX.Element {

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

      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}


    </section>
  );
}

export default memo(Reviews);
