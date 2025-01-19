import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PremiumMark from './premium-mark';

describe('Component: PremiumMark', () => {
  it('Should render correctly', () => {
    const expectedText = /Premium/i;
    const expectedClassName = 'place-card__mark';
    render(<PremiumMark className={expectedClassName}/>);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
