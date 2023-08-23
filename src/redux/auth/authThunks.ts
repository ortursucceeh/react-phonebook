import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, signup, logout } from '../../services/apiAuth';
import { User, UserResponse } from 'types/types';

export const loginThunk = createAsyncThunk<
  UserResponse,
  Omit<User, 'name' | 'token'>
>('auth/login', body => login(body));

export const signupThunk = createAsyncThunk<UserResponse, Omit<User, 'token'>>(
  'auth/signup',
  body => signup(body)
);

export const logoutThunk = createAsyncThunk<string, string>(
  'auth/logout',
  token => logout(token)
);
