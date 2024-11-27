import { PLACES_SORTING_OPTIONS } from '../../const';

// ^======================== PlacesSorting ========================^ //

export default function PlacesSorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {PLACES_SORTING_OPTIONS.map(({ id, name, isActive }) => (
          <li key={id} className={isActive ? 'places__option places__option--active' : 'places__option'} tabIndex={0}>
            {name}
          </li>
        ))}
      </ul>
    </form>
  );
}
