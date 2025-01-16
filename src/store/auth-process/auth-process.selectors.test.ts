import { describe, it } from 'vitest';
import { AuthorizationStatus, LoginStatus, NameSpace } from '../../const';
import { getAuthStatus, getLogin, getLoginStatus } from './auth-process.selectors';

describe('AuthProcess selectors', () => {
  const state = {
    [NameSpace.Auth]: {
      status: AuthorizationStatus.Unknown,
      login: 'test@test.com',
      avatarUrl: './path-to-avatar.png',
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
