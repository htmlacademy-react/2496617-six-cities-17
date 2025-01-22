import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { SortingOption } from '../../const';
import { changeSortingType } from '../../store/offers-process/offers-process.slice';
import { withStore } from '../../utils/mock-components';
import { extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import { getRandomInteger } from '../../utils/utils';
import PlacesSorting from './places-sorting';

describe('Component: PlacesSorting', () => {
  it('Should render correctly', () => {
    const expectedText = 'Sort by';
    const expectedOptionTexts = Object.values(SortingOption);
    const { withStoreComponent } = withStore(<PlacesSorting />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();

    const sortingListItems = screen.getAllByRole('listitem');

    expect(sortingListItems).toHaveLength(expectedOptionTexts.length);

    sortingListItems.forEach((item, index) => {
      expect(item).toHaveTextContent(expectedOptionTexts[index]);
    });
  });

  it('Should dispatch "changeSortingType" when user clicks on sorting option', async () => {
    const sortingOptionValues = Object.values(SortingOption);
    const selectedSortingOption = sortingOptionValues[getRandomInteger(0, sortingOptionValues.length - 1)];
    const { withStoreComponent, mockStore } = withStore(<PlacesSorting />, makeFakeStore());

    render(withStoreComponent);

    await userEvent.click(screen.getByTestId(`sorting-option-element-${selectedSortingOption}`));

    const actionTypes = extractActionsTypes(mockStore.getActions());
    expect(actionTypes).toEqual([changeSortingType.type]);
  });
});
