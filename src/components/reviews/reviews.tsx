import Review from '../../components/review/review';
import ReviewForm from '../../components/review-form/review-form';
import { ReviewType } from '../../types';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';

// ^======================== Reviews ========================^ //

type ReviewsProps = {
  reviews: ReviewType[];
};

export default function Reviews({ reviews }: ReviewsProps): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <section className='offer__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews · <span className='reviews__amount'>{reviews.length}</span>
      </h2>
      <ul className='reviews__list'>
        {reviews.map((review) => (
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
