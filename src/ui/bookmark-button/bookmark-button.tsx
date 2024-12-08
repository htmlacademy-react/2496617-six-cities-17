import classNames from 'classnames';

// ^======================== BookmarkButton ========================^ //

type BookmarkButtonProps = {
  elementClass: string;
  isFavorite: boolean;
  parameters: {
    width: number;
    height: number;
  };
};

export default function BookmarkButton(bookmarkButtonProps: BookmarkButtonProps): JSX.Element {
  const { elementClass, isFavorite, parameters: { width, height } } = bookmarkButtonProps;
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
      <span className='visually-hidden'>To bookmarks</span>
    </button >


  );
}
