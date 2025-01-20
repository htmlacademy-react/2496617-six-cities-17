import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import NavButton from './nav-button';

describe('Component: NavButton', () => {
  it('Should render correctly', () => {
    const mockCityName = faker.location.city();
    const mockActiveStatus = faker.datatype.boolean();
    const mockOnNavLinkClick = () => { };

    render(
      <NavButton
        name={mockCityName}
        isActive={mockActiveStatus}
        onNavLinkClick={mockOnNavLinkClick}
      />
    );

    expect(screen.getByText(mockCityName)).toBeInTheDocument();
  });
});
