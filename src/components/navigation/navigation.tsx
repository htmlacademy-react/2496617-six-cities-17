import { LOCATIONS } from '../../const.ts';
import NavButton from '../nav-button/nav-button';
import { changeCity, fillOfferList } from '../../store/action';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';

// ^======================== Navigation ========================^ //

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const defaultCityName = useAppSelector((state) => state.cityName);

  const [activeLocation, setActiveLocation] = useState<string | null>(defaultCityName);

  const onNavLinkClick = (location: string) => {
    setActiveLocation(location);
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
              isActive={location === activeLocation}
              onNavLinkClick={() => onNavLinkClick(location)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
