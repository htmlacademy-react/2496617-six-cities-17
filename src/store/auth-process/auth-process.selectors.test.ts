import { describe, it } from 'vitest';
import { AuthorizationStatus, LoginStatus, NameSpace } from '../../const';
import { getAuthStatus, getLogin, getLoginStatus } from './auth-process.selectors';
import { faker } from '@faker-js/faker';

describe('AuthProcess selectors', () => {
  const state = {
    [NameSpace.Auth]: {
      status: AuthorizationStatus.Unknown,
      login: faker.string.alpha(),
      avatarUrl: faker.system.filePath(),
      loginStatus: LoginStatus.Unknown,
    }
  };

  it('Should return auth', () => {
    const { status } = state[NameSpace.Auth];
    const result = getAuthStatus(state);
    expect(result).toBe(status);
  });

  it('Should return login from state', () => {
    const { login } = state[NameSpace.Auth];
    const result = getLogin(state);
    expect(result).toBe(login);
  });

  it('Should return login status from state', () => {
    const { loginStatus } = state[NameSpace.Auth];
    const result = getLoginStatus(state);
    expect(result).toBe(loginStatus);
  });
});
