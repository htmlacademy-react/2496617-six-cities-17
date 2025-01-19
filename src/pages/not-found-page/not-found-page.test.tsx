import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { withHistory } from '../../utils/mock-components';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('Should render correctly', () => {
    const expectedText = 'Error 404';
    const preparedComponent = withHistory(<NotFoundPage />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
