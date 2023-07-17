import { createSlice, isAnyOf } from '@reduxjs/toolkit'; //
import { userInitialState } from './../initialState';
import { loginThunk, signupThunk, logoutThunk } from './authThunks';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunks = [loginThunk, signupThunk, logoutThunk];

const getTypes = type => thunks.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledFormAction = (state, { payload }) => {
  state.name = payload.user.name;
  state.email = payload.user.email;
  state.token = payload.token;
};

const handleFulfilledLogout = state => {
  state.name = null;
  state.email = null;
  state.token = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const userSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(loginThunk.fulfilled, handleFulfilledFormAction)
      .addCase(signupThunk.fulfilled, handleFulfilledFormAction)
      .addCase(logoutThunk.fulfilled, handleFulfilledLogout)
      .addMatcher(isAnyOf(...getTypes(PENDING)), handlePending)
      .addMatcher(isAnyOf(...getTypes(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...getTypes(REJECTED)), handleRejected);
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
