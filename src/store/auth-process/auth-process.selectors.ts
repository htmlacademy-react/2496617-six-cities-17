import { AuthorizationStatus, LoginStatus, NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== auth-process.selectors ========================% //

export const getAuthStatus = (state: Pick<AppState, NameSpace.Auth>): AuthorizationStatus => state[NameSpace.Auth].status;
export const getLogin = (state: Pick<AppState, NameSpace.Auth>): string => state[NameSpace.Auth].login;
export const getLoginStatus = (state: Pick<AppState, NameSpace.Auth>): LoginStatus => state[NameSpace.Auth].loginStatus;
export const getAvatarUrl = (state: Pick<AppState, NameSpace.Auth>): string => state[NameSpace.Auth].avatarUrl;
