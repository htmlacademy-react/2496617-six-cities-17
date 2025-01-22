import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import LoginPage from './login-page';

describe('Component: LoginPage', () => {
  it('Should render correctly', () => {
    const loginTitleTestId = 'login-title';
    const { withStoreComponent } = withStore(<LoginPage />, makeFakeStore());
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);
    const loginTitle = screen.getByTestId(loginTitleTestId);

    expect(loginTitle).toBeInTheDocument();
  });
});
