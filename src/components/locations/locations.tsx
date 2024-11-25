import { LOCATIONS } from '../../mock/locations';

// ^======================== locations ========================^ //

export default function Locations(): JSX.Element {
  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {LOCATIONS.map(({ id, name, isSelected }) => (
          <li className='locations__item' key={id}>
            <a
              className={`locations__item-link tabs__item ${isSelected && 'tabs__item--active'}`}
              href='#'
            >
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
