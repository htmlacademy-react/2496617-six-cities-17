import { LOCATIONS } from '../../const.ts';
import NavButton from '../nav-button/nav-button';

// ^======================== Navigation ========================^ //

export default function Navigation(): JSX.Element {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {LOCATIONS.map((location) => (
            <NavButton key={location} name={location} isActive={false} />
          ))}
        </ul>
      </section>
    </div>
  );
}
