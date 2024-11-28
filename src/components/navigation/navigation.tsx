import { nanoid } from '@reduxjs/toolkit';
import { LOCATIONS } from '../../mock/locations';
import NavButton from '../nav-button/nav-button';

// ^======================== Navigation ========================^ //

export default function Navigation(): JSX.Element {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {LOCATIONS.map((location) => (
            <NavButton key={nanoid()} name={location} to='#' />
          ))}
        </ul>
      </section>
    </div>
  );
}
