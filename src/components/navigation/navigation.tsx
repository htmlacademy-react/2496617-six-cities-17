import { LOCATIONS } from '../../const.ts';
import NavButton from '../nav-button/nav-button';
import { changeCity } from '../../store/action';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';

// ^======================== Navigation ========================^ //

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const defaultCity = useAppSelector((state) => state.city);

  const [activeLocation, setActiveLocation] = useState<string | null>(defaultCity);

  const onNavLinkClick = (location: string) => {
    setActiveLocation(location);
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
              isActive={location === activeLocation}
              onNavLinkClick={() => onNavLinkClick(location)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
