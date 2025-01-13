import { ChangeEvent, useState } from 'react';
import { CommentLength, PostingStatus, RATING_OPTIONS } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-action';
import { getOfferData } from '../../store/offer-process/offer-process.selectors';
import { getPostingStatus } from '../../store/reviews-process/reviews-process.selectors';
import RatingButton from '../rating-button/rating-button';

// ^======================== review-form ========================^ //

export default function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const postingStatus = useAppSelector(getPostingStatus);
  const offerId = useAppSelector(getOfferData)?.id;

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

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offerId) {
      dispatch(postReviewAction({ comment, rating, offerId }));
      setReviewFormState(reviewFormInitialState);
    }
  };

  const submitCondition = Boolean(rating) &&
    (comment.length >= CommentLength.MIN && comment.length < CommentLength.MAX);

  return (
    <form
      className='reviews__form form'
      onSubmit={handleFormSubmit}
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
        onChange={(evt) => {
          setReviewFormState((prevState) => ({
            ...prevState,
            comment: evt.target.value,
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
          disabled={!submitCondition || postingStatus === PostingStatus.Posting}
        >
          {postingStatus === PostingStatus.Posting ? 'Posting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
