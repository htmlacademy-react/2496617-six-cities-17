// ^======================== RatingButton ========================^ //
type RatingButtonProps = {
  value: number;
  title: string;
  checked: boolean;
  disabled: boolean;
  onRatingButtonChange: (value: number) => void;
};

export default function RatingButton(ratingButtonProps: RatingButtonProps): JSX.Element {
  const { value, checked, title, onRatingButtonChange, disabled } = ratingButtonProps;

  return (
    <>
      <input
        className='form__rating-input visually-hidden'
        name='rating'
        value={value}
        id={`${value}-stars`}
        type='radio'
        checked={checked}
        disabled={disabled}
        onChange={(evt) => {
          onRatingButtonChange(Number(evt.target.value));
        }}
        data-testid={`rating-input-${value}`}
      />
      <label
        htmlFor={`${value}-stars`}
        className='reviews__rating-label form__rating-label'
        title={title}
        data-testid={`rating-label-${value}`}
      >
        <svg className='form__star-image' width={37} height={33}>
          <use xlinkHref='#icon-star' />
        </svg>
      </label>
    </>
  );
}
