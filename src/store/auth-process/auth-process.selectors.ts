import { AuthorizationStatus, LoginStatus, NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== auth-process.selectors ========================% //

export const getAuthStatus = (state: AppState): AuthorizationStatus => state[NameSpace.Auth].status;
export const getLogin = (state: AppState): string => state[NameSpace.Auth].login;
export const getLoginStatus = (state: AppState): LoginStatus => state[NameSpace.Auth].loginStatus;
export const getAvatarUrl = (state: AppState): string => state[NameSpace.Auth].avatarUrl;
