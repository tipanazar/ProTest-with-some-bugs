import { createSlice } from '@reduxjs/toolkit';

import { userOperations } from './userAccount-operations';

const { registerUser, loginUser, logoutUser, getCurrentUser } =
  userOperations;

const initialState = {
  user: {
    email: '',
    id: '',
  },
  accessToken: '',
  isUserLogin: false,
  loading: false,
  error: null,
  refreshError: null
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload };
      state.isUserLogin = true;
      state.loading = false;
    },
    [registerUser.rejected]: state => {
      state.error = true;
      state.loading = false;
    },

    [loginUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.userData };
      state.accessToken = payload.accessToken;
      state.isUserLogin = true;
      state.loading = false;
    },
    [loginUser.rejected]: state => {
      state.error = true;
      state.loading = false;
    },

    [logoutUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: state => {
      state.user = { email: '', id: '' };
      state.accessToken = '';
      state.isUserLogin = false;
      state.loading = false;
    },
    [logoutUser.rejected]: state => {
      state.loading = false;
      state.error = true;
    },

    [getCurrentUser.pending]: state => {
      state.loading = true;
      state.refreshError = null;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user.email = payload.email;
      state.isUserLogin = true;
      state.loading = false;
    },
    [getCurrentUser.rejected]: state => {
      state.loading = false;
      state.refreshError = true;
    },
  },
});

export default userSlice.reducer;
