// ^======================== RatingButton ========================^ //
type RatingButtonProps = {
  value: number;
  title: string;
  onRatingButtonChange: (value: number) => void;
  checked: boolean;
};

export default function RatingButton(ratingButtonProps: RatingButtonProps): JSX.Element {
  const { value, checked, title, onRatingButtonChange } = ratingButtonProps;

  return (
    <>
      <input
        className='form__rating-input visually-hidden'
        name='rating'
        value={value}
        id={`${value}-stars`}
        type='radio'
        checked={checked}
        onChange={(e) => {
          onRatingButtonChange(Number(e.target.value));
        }}
      />
      <label
        htmlFor={`${value}-stars`}
        className='reviews__rating-label form__rating-label'
        title={title}
      >
        <svg className='form__star-image' width={37} height={33}>
          <use xlinkHref='#icon-star' />
        </svg>
      </label>
    </>
  );
}
