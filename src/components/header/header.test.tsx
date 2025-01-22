import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import Header from './header';

describe('Component: Header', () => {
  it('Should render correctly', () => {
    const headerTestId = 'header-element';
    const { withStoreComponent } = withStore(<Header />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
