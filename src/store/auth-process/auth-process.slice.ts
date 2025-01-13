import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, LoginStatus, NameSpace } from '../../const';
import { AuthProcess } from '../../types';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

// %======================== auth-process.slice ========================% //

const initialState: AuthProcess = {
  status: AuthorizationStatus.Unknown,
  login: '',
  avatarUrl: '',
  loginStatus: LoginStatus.Unknown,
};

export const authProcess = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.status = AuthorizationStatus.Auth;
        state.login = action.payload.email;
        state.avatarUrl = action.payload.avatarUrl;
        state.loginStatus = LoginStatus.LoggedIn;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.status = AuthorizationStatus.NoAuth;
        state.login = '';
        state.loginStatus = LoginStatus.Unknown;
      })
      // @------------ login ------------@ //
      .addCase(loginAction.pending, (state) => {
        state.loginStatus = LoginStatus.Processing;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.status = AuthorizationStatus.Auth;
        state.loginStatus = LoginStatus.LoggedIn;
      })
      .addCase(loginAction.rejected, (state) => {
        state.status = AuthorizationStatus.Unknown;
        state.loginStatus = LoginStatus.Error;
      })
      // @------------ logout ------------@ //
      .addCase(logoutAction.fulfilled, (state) => {
        state.status = AuthorizationStatus.NoAuth;
        state.login = '';
        state.loginStatus = LoginStatus.Unknown;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.status = AuthorizationStatus.Auth;
        state.loginStatus = LoginStatus.LoggedIn;
      });
  }
});
