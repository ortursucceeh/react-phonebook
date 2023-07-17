import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, signup, logout } from '../../services/apiAuth';

export const loginThunk = createAsyncThunk('auth/login', body => login(body));

export const signupThunk = createAsyncThunk('auth/signup', body =>
  signup(body)
);

export const logoutThunk = createAsyncThunk('auth/logout', token =>
  logout(token)
);

// export const getCurrentUserThunk = createAsyncThunk(
//   'auth/getCurrentUser',
//   token => getCurrentUser(token)
// );
