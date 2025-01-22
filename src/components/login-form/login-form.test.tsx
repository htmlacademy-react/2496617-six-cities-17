import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import LoginForm from './login-form';

describe('Component: LoginForm', () => {
  it('Should render correctly', () => {
    const loginText = 'E-mail';
    const passwordText = 'Password';
    const { withStoreComponent } = withStore(<LoginForm />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(loginText)).toBeInTheDocument();
    expect(screen.getByText(passwordText)).toBeInTheDocument();
  });

  it('Should render correctly when user enter login and password', async () => {
    const loginElementTestId = 'login-element';
    const passwordElementTestId = 'password-element';
    const expectedLoginValue = faker.internet.email();
    const expectedPasswordValue = faker.internet.password();
    const { withStoreComponent } = withStore(<LoginForm />, makeFakeStore());

    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId(loginElementTestId),
      expectedLoginValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedLoginValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();

  });
});
