import { LOCATIONS } from '../../const.ts';
import NavButton from '../nav-button/nav-button';

// ^======================== Navigation ========================^ //

function Navigation(): JSX.Element {
  return (
    <div className='tabs' data-testid='navigation-element'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {LOCATIONS.map((location) => (
            <NavButton
              key={location}
              cityName={location}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Navigation;
