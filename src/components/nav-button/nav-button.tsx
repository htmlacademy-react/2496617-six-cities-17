import { NavLink } from 'react-router-dom';
import { capitalize } from '../../utils/utils';

// ^======================== NavButton ========================^ //

type NavButtonProps = {
  name: string;
  to: string;
};

type isActive = {
  isActive: boolean;
};

const setActiveClass = ({ isActive }: isActive): string =>
  `locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`;

export default function NavButton(navButtonProps: NavButtonProps): JSX.Element {
  const { name } = navButtonProps;
  return (
    <li className='locations__item'>
      <NavLink
        className={setActiveClass}
        to={`/${name}`}
      >
        <span>{capitalize(name)}</span>
      </NavLink>
    </li>
  );
}
