import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import CitiesEmpty from './cities-empty';

describe('Component: CitiesEmpty', () => {
  it('Should render correctly', () => {
    const expectedStatusText = /No places to stay available/i;
    const expectedDescriptionText = /We could not find any property available at the moment in/i;
    const { withStoreComponent } = withStore(<CitiesEmpty />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(expectedStatusText)).toBeInTheDocument();
    expect(screen.getByText(expectedDescriptionText)).toBeInTheDocument();
  });
});
