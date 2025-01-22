import { render, screen } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import { describe, it } from 'vitest';
import { AppRoute, AuthorizationStatus } from '../../const';
import { withHistory } from '../../utils/mock-components';
import PrivateRoute from './private-route';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Favorites);
  });

  it('Should render component for public route when user is not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';

    const withHistoryComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{expectedText}</span>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <span>{notExpectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('Should render component for public route when user is not authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';

    const withHistoryComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{notExpectedText}</span>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <span>{expectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
