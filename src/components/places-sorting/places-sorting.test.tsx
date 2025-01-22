import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { SortingOption } from '../../const';
import { withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
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
});
