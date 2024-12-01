import { capitalize } from '../../utils/utils';
import classNames from 'classnames';

// ^======================== NavButton ========================^ //

type NavButtonProps = {
  name: string;
  isActive: boolean;
};


export default function NavButton(navButtonProps: NavButtonProps): JSX.Element {

  const { name, isActive } = navButtonProps;
  return (
    <li className='locations__item'>
      <a
        className={classNames(
          'locations__item-link', 'tabs__item',
          { 'tabs__item--active': isActive }
        )}
      >
        <span>{capitalize(name)}</span>
      </a>
    </li>
  );
}
