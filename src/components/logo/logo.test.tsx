import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withHistory } from '../../utils/mock-components';
import Logo from './logo';

describe('Component: Logo', () => {
  it('Should render correctly', () => {
    const expectedAltText = '6 cities logo';
    const withHistoryComponent = withHistory(<Logo />);

    render(withHistoryComponent);

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
