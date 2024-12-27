import { LOCATIONS } from '../../const.ts';
import NavButton from '../nav-button/nav-button';
import { changeCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { getCityName } from '../../store/selectors.ts';

// ^======================== Navigation ========================^ //

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCityName = useAppSelector(getCityName);

  const onNavLinkClick = (location: string) => {
    dispatch(changeCity(location));
  };

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {LOCATIONS.map((location) => (
            <NavButton
              key={location}
              name={location}
              isActive={location === currentCityName}
              onNavLinkClick={() => onNavLinkClick(location)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
