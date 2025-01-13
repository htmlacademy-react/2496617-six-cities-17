import classNames from 'classnames';

// ^======================== NavButton ========================^ //

type NavButtonProps = {
  name: string;
  isActive: boolean;
  onNavLinkClick: () => void;
};


export default function NavButton(navButtonProps: NavButtonProps): JSX.Element {

  const { name, isActive, onNavLinkClick } = navButtonProps;

  return (
    <li className='locations__item'>
      <a
        onClick={onNavLinkClick}
        className={classNames(
          'locations__item-link', 'tabs__item',
          { 'tabs__item--active': isActive }
        )}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}
