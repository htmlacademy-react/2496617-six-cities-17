import classNames from 'classnames';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { addToFavoritesAction, removeFromFavoritesAction } from '../../store/api-action';
import { getAuthStatus } from '../../store/auth-process/auth-process.selectors';

// ^======================== BookmarkButton ========================^ //

type BookmarkButtonProps = {
  elementClass: string;
  isFavorite: boolean;
  sizes: {
    width: number;
    height: number;
  };
  offerId: string;
};

export default function BookmarkButton(bookmarkButtonProps: BookmarkButtonProps): JSX.Element {
  const { elementClass, isFavorite, sizes: { width, height }, offerId } = bookmarkButtonProps;
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  const handleFavoriteToggle = () => {
    if (authStatus === AuthorizationStatus.Auth) {
      if (isFavorite) {
        dispatch(removeFromFavoritesAction(offerId));
      } else {
        dispatch(addToFavoritesAction(offerId));
      }
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return (
    <button
      className={classNames(
        `${elementClass}-button button`,
        { [`${elementClass}-button--active`]: isFavorite }
      )}
      type='button'
      onClick={handleFavoriteToggle}
      data-testid='bookmark-button-element'
    >
      <svg className={`${elementClass}-icon`} width={width} height={height}>
        <use xlinkHref='#icon-bookmark' />
      </svg>
      <span className='visually-hidden'>{isFavorite ? 'Remove from bookmarks' : 'To bookmarks'}</span>
    </button >
  );
}
