import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import HeaderNav from './header-nav';

describe('Component: HeaderNav', () => {
  it('Should render correctly', () => {
    const headerNavTestId = 'header-nav-element';
    const { withStoreComponent } = withStore(<HeaderNav />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByTestId(headerNavTestId)).toBeInTheDocument();
  });
});
