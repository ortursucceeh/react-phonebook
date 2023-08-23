import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userInitialState } from '../initialState';
import { loginThunk, signupThunk, logoutThunk } from './authThunks';

import { STATUS_ENUM } from 'types/types';

const STATUS = {
  pending: STATUS_ENUM.PENDING,
  fulfilled: STATUS_ENUM.FULFILLED,
  rejected: STATUS_ENUM.REJECTED,
};

const thunks = [loginThunk, signupThunk, logoutThunk];

const getTypes = (type: keyof typeof STATUS) => thunks.map(el => el[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  reducers: {},
  extraReducers: builder => {
    const { pending, fulfilled, rejected } = STATUS;
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.token = payload.token;
      })
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.token = payload.token;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.name = null;
        state.email = null;
        state.token = null;
      })
      .addMatcher(isAnyOf(...getTypes(pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getTypes(fulfilled)), state => {
        state.isLoading = false;
        state.error = '';
      })
      .addMatcher(isAnyOf(...getTypes(rejected)), (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
