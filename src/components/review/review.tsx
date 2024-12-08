import { DATE_FORMAT } from '../../const';
import { convertRating, humanizeTime } from '../../utils/utils';

// ^======================== Review ========================^ //

type ReviewProps = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export default function Review(reviewProps: ReviewProps): JSX.Element {
  const { date, user: { name, avatarUrl }, comment, rating } = reviewProps;
  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={avatarUrl}
            width={54}
            height={54}
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>{name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: convertRating(rating) }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{comment}</p>
        <time className='reviews__time' dateTime='2019-04-24'>
          {humanizeTime(date, DATE_FORMAT)}
        </time>
      </div>
    </li>
  );
}
