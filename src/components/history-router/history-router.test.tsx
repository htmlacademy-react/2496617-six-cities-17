import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { describe } from 'vitest';
import HistoryRouter from './history-router';

describe('Component: HistoryRouter', () => {
  it('Should render children correctly and handle navigation', async () => {
    const history = createMemoryHistory();
    const initialPath = '/';
    history.push(initialPath);

    const ChildComponent = () => <div>Child Component</div>;

    render(
      <HistoryRouter history={history}>
        <ChildComponent />
      </HistoryRouter>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();

    history.push('/new-route');

    await waitFor(() => expect(history.location.pathname).toBe('/new-route'));
  });
});
