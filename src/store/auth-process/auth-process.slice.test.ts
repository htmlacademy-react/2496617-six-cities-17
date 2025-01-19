import { faker } from '@faker-js/faker';
import { describe, it } from 'vitest';
import { AuthorizationStatus, LoginStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { authProcess } from './auth-process.slice';

describe('AuthProcess slice', () => {
  const emptyAction = { type: '' };

  it('Should return initial state with empty action', () => {
    const expectedState = {
      status: AuthorizationStatus.Unknown,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Unknown,
    };

    const result = authProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action', () => {
    const expectedState = {
      status: AuthorizationStatus.Unknown,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Unknown,
    };

    const result = authProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "AUTH", "login" to user\'s email, "avatarUrl" to path to an image and "loginStatus" to "logged-in" with checkAuthAction.fulfilled', () => {
    const mockAuthResponse = {
      email: faker.internet.email(),
      avatarUrl: faker.system.filePath(),
    };

    const initialState = {
      status: AuthorizationStatus.Unknown,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Unknown,
    };
    const expectedState = {
      status: AuthorizationStatus.Auth,
      login: mockAuthResponse.email,
      avatarUrl: mockAuthResponse.avatarUrl,
      loginStatus: LoginStatus.LoggedIn,
    };

    const result = authProcess.reducer(initialState, checkAuthAction.fulfilled(mockAuthResponse, '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "NO_AUTH", "login" to "", "avatarUrl" to "" and "loginStatus" to "error" with checkAuthAction.rejected', () => {
    const initialState = {
      status: AuthorizationStatus.Unknown,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Unknown,
    };
    const expectedState = {
      status: AuthorizationStatus.NoAuth,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Unknown,
    };

    const result = authProcess.reducer(initialState, checkAuthAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('Should set "loginStatus" to "processing" with "loginAction.pending"', () => {
    const initialState = {
      status: AuthorizationStatus.Unknown,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Unknown,
    };
    const expectedState = {
      status: AuthorizationStatus.Unknown,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Processing,
    };
    const result = authProcess.reducer(initialState, loginAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "AUTH" and "login status" to "logged in" with "loginAction.fulfilled"', () => {
    const mockAuthData = {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    const initialState = {
      status: AuthorizationStatus.Unknown,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Unknown,
    };
    const expectedState = {
      status: AuthorizationStatus.Auth,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.LoggedIn,
    };
    const result = authProcess.reducer(initialState, loginAction.fulfilled('', '', mockAuthData));
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "Unknown" and "login status" to "error" with "loginAction.rejected"', () => {
    const initialState = {
      status: AuthorizationStatus.Unknown,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Unknown,
    };
    const expectedState = {
      status: AuthorizationStatus.Unknown,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Error,
    };
    const result = authProcess.reducer(initialState, loginAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "NO_AUTH" and "login status" to "unknown" with "logoutAction.fulfilled"', () => {
    const initialState = {
      status: AuthorizationStatus.Auth,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.LoggedIn,
    };
    const expectedState = {
      status: AuthorizationStatus.NoAuth,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.Unknown,
    };
    const result = authProcess.reducer(initialState, logoutAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('Should set "status" to "AUTH" and "login status" to "logged-in" with "logoutAction.rejected"', () => {
    const initialState = {
      status: AuthorizationStatus.Auth,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.LoggedIn,
    };
    const expectedState = {
      status: AuthorizationStatus.Auth,
      login: '',
      avatarUrl: '',
      loginStatus: LoginStatus.LoggedIn,
    };
    const result = authProcess.reducer(initialState, logoutAction.rejected);
    expect(result).toEqual(expectedState);
  });
});
