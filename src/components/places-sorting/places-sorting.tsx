import classNames from 'classnames';
import { SortingOption } from '../../const';
import { memo, useState } from 'react';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { capitalize } from '../../utils/utils';
import { getSortingType } from '../../store/offers-process/offers-process.selectors';
import { changeSortingType } from '../../store/offers-process/offers-process.slice';

// ^======================== PlacesSorting ========================^ //

function PlacesSorting(): JSX.Element {

  const [isListOpen, setIsListOpen] = useState(false);
  const selectedOption = useAppSelector(getSortingType);

  const dispatch = useAppDispatch();

  const onSortingTypeClick = () => {
    setIsListOpen(!isListOpen);
  };

  const placesSortingTypeRef = useRef<HTMLElement>(null);
  const optionsListRef = useRef<HTMLUListElement>(null);

  const onOptionClick = (option: SortingOption) => {
    dispatch(changeSortingType(option));
    setIsListOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        ref={placesSortingTypeRef}
        onClick={onSortingTypeClick}
      >
        {capitalize(selectedOption)}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        ref={optionsListRef}
        className={classNames(
          'places__options places__options--custom',
          { 'places__options--opened': isListOpen }
        )}
      >
        {Object.values(SortingOption).map((placesSortingOption) => (
          <li
            key={placesSortingOption}
            className={classNames(
              'places__option',
              { 'places__option--active': selectedOption === placesSortingOption }
            )}
            tabIndex={0}
            onClick={() => onOptionClick(placesSortingOption)}
          >
            {placesSortingOption}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default memo(PlacesSorting);
