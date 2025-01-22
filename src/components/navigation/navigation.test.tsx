import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import Navigation from './navigation';

describe('Component: Navigation', () => {
  it('Should render correctly', () => {
    const navigationTestId = 'navigation-element';
    const { withStoreComponent } = withStore(<Navigation />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByTestId(navigationTestId)).toBeInTheDocument();
  });
});
