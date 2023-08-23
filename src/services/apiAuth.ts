import { User } from 'types/types';

const API_URL = 'https://connections-api.herokuapp.com';

export const login = async (body: Omit<User, 'name' | 'token'>) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const data = await fetch(`${API_URL}/users/login`, options);
  return await data.json();
};

export const signup = async (body: Omit<User, 'token'>) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const data = await fetch(`${API_URL}/users/signup`, options);
  return await data.json();
};

export const logout = async (token: string) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const data = await fetch(`${API_URL}/users/logout`, options);
  return await data.json();
};
