import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import MainPage from './main-page';

describe('Page: MainPage', () => {
  it('Should render correctly if there are offers', () => {
    const expectedHeadingText = 'Cities';
    const mainPageTestId = 'main-page-element';

    const { withStoreComponent } = withStore(<MainPage />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByText(expectedHeadingText));
    expect(screen.getByTestId(mainPageTestId));
  });

  it('Should render correctly if there are no offers', () => {
    const expectedText = 'No places to stay available';
    const mainPageTestId = 'main-page-element';
    const { withStoreComponent } = withStore(<MainPage />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByText(expectedText));
    expect(screen.getByTestId(mainPageTestId));
  });
});
