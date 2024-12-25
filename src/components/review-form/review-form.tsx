import { ChangeEvent, useState } from 'react';
import { RATING_OPTIONS } from '../../const';
import RatingButton from '../rating-button/rating-button';
import { useAppDispatch } from '../../hooks';
import { postReviewAction } from '../../store/api-action';

// ^======================== review-form ========================^ //

type ReviewFormProps = {
  offerId: string;
};

export default function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const reviewFormInitialState = {
    comment: '',
    rating: 0,
  };

  const [reviewFormState, setReviewFormState] = useState(reviewFormInitialState);

  const { comment, rating } = reviewFormState;

  const handleRatingChange = (value: number): void => {
    setReviewFormState((prevState) => ({
      ...prevState,
      rating: value,
    }));
  };

  const formSubmitHandler = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction({ comment, rating, offerId }));
    setReviewFormState(reviewFormInitialState);
  };

  const submitCondition: boolean = Boolean(rating) && (comment.length >= 50 && comment.length < 300);

  return (
    <form
      className='reviews__form form'
      onSubmit={formSubmitHandler}
    >
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>

      <div className='reviews__rating-form form__rating'>
        {RATING_OPTIONS.map(({ value, title }) => (
          <RatingButton
            key={value}
            value={value}
            title={title}
            onRatingButtonChange={handleRatingChange}
            checked={reviewFormState.rating === value}
          />
        ))}
      </div>

      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={reviewFormState.comment}
        onChange={(e) => {
          setReviewFormState((prevState) => ({
            ...prevState,
            comment: e.target.value,
          }));
        }}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay with
          at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={!submitCondition}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
