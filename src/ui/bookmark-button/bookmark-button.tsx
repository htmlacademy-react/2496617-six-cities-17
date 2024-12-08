import classNames from 'classnames';

// ^======================== BookmarkButton ========================^ //

type BookmarkButtonProps = {
  elementClass: string;
  isFavorite: boolean;
  sizes: {
    width: number;
    height: number;
  };
};

export default function BookmarkButton(bookmarkButtonProps: BookmarkButtonProps): JSX.Element {
  const { elementClass, isFavorite, sizes: { width, height } } = bookmarkButtonProps;
  return (
    <button
      className={classNames(
        `${elementClass}-button button`,
        { [`${elementClass}-button--active`]: isFavorite }
      )}
      type='button'
    >
      <svg className={`${elementClass}-icon`} width={width} height={height}>
        <use xlinkHref='#icon-bookmark' />
      </svg>
      <span className='visually-hidden'>{isFavorite ? 'Remove from bookmarks' : 'To bookmarks'}</span>
    </button >


  );
}
