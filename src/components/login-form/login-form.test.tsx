import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import { APIRoute } from '../../const';
import { withStore } from '../../utils/mock-components';
import { extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import LoginForm from './login-form';
import { fetchFavoriteOffersAction, fetchOffersAction, loginAction } from '../../store/api-action';

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

  it('Should dispatch "loginAction" when user clicks on login button', async () => {
    const loginElementTestId = 'login-element';
    const passwordElementTestId = 'password-element';
    const fakeUserData = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<LoginForm />, makeFakeStore());

    render(withStoreComponent);

    const fakeServerReply = { token: faker.string.alpha(10) };
    mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReply);
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, []);
    mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, []);

    await userEvent.type(
      screen.getByTestId(loginElementTestId),
      fakeUserData.email,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      fakeUserData.password,
    );

    await userEvent.click(screen.getByTestId('login-submit-button'));

    const actionsTypes = extractActionsTypes(mockStore.getActions());

    expect(actionsTypes).toEqual([
      loginAction.pending.type,
      fetchOffersAction.pending.type,
      fetchFavoriteOffersAction.pending.type,
      loginAction.fulfilled.type,
      fetchOffersAction.fulfilled.type,
      fetchFavoriteOffersAction.fulfilled.type,
    ]);
  });
});
