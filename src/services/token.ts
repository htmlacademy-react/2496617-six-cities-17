// %======================== token ========================% //

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
const LOGIN = 'login';

export type Token = string;
export type Login = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

export const getLogin = (): Login => {
  const login = localStorage.getItem(LOGIN);
  return login ?? '';
};

export const saveLogin = (login: Login): void => {
  localStorage.setItem(LOGIN, login);
};

export const dropLogin = (): void => {
  localStorage.removeItem(LOGIN);
};
