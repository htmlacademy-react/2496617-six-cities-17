import { LOCATIONS } from '../../const.ts';
import NavButton from '../nav-button/nav-button';
import { changeCity, fillOfferList } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';

// ^======================== Navigation ========================^ //

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCityName = useAppSelector((state) => state.cityName);

  const onNavLinkClick = (location: string) => {
    dispatch(changeCity(location));
    dispatch(fillOfferList());
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
