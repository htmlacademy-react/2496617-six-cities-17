import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Preloader from './preloader';

describe('Component: Preloader', () => {
  it('Should render correctly', () => {
    const expectedText = /Loading.../i;
    render(<Preloader />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

