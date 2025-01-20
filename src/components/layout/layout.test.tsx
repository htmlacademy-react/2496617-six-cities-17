import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import Layout from './layout';

describe('Component: Layout', () => {
  it('Should render correctly', () => {
    const layoutTestId = 'layout-element';
    const withHistoryComponent = withHistory(<Layout />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);

    expect(screen.getByTestId(layoutTestId)).toBeInTheDocument();
  });
});
