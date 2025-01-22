import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { LOCATIONS } from '../../const';
import { changeCity } from '../../store/offers-process/offers-process.slice';
import { withStore } from '../../utils/mock-components';
import { extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import { getRandomInteger } from '../../utils/utils';
import NavButton from './nav-button';

describe('Component: NavButton', () => {
  it('Should render correctly', () => {
    const mockCityName = faker.location.city();

    const { withStoreComponent } = withStore(
      <NavButton cityName={mockCityName} />,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText(mockCityName)).toBeInTheDocument();
  });

  it('Should dispatch "changeCity" action when NavButton is clicked', async () => {
    const newCityName = LOCATIONS[getRandomInteger(0, LOCATIONS.length - 1)];

    const { withStoreComponent, mockStore } = withStore(
      <NavButton cityName={newCityName} />,
      makeFakeStore()
    );

    render(withStoreComponent);

    await userEvent.click(screen.getByTestId(`nav-button-element-${newCityName}`));

    const actionTypes = extractActionsTypes(mockStore.getActions());
    expect(actionTypes).toEqual([changeCity.type]);
  });
});
