import { useState } from 'react';
import { RATING_OPTIONS } from '../../const';
import RatingButton from '../rating-button/rating-button';
// ^======================== review-form ========================^ //

export default function ReviewForm(): JSX.Element {

  const [reviewFormState, setReviewFormState] = useState({
    rating: 0,
    text: ''
  });

  const { rating, text } = reviewFormState;

  const handleRatingChange = (value: number): void => {
    setReviewFormState((prevState) => ({
      ...prevState,
      rating: value,
    }));
  };
  return (
    <form className='reviews__form form' action='#' method='post'>
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
        value={reviewFormState.text}
        onChange={(e) => {
          setReviewFormState((prevState) => ({
            ...prevState,
            text: e.target.value,
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
          disabled={!(rating || text.length >= 50)}
        >
          Submit
        </button>
      </div>
    </form>

  );
}
