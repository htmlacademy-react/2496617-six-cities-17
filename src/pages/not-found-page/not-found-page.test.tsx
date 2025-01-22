import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { withHistory } from '../../utils/mock-components';
import NotFoundPage from './not-found-page';

describe('Page: NotFoundPage', () => {
  it('Should render correctly', () => {
    const expectedText = 'Error 404';
    const withHistoryComponent = withHistory(<NotFoundPage />);

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
