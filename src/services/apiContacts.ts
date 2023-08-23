import { NewContact } from 'types/types';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const getContacts = async (token: string) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const data = await fetch(`${BASE_URL}/contacts`, options);
  return await data.json();
};

export const createContact = async (data: NewContact, token: string) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(`${BASE_URL}/contacts`, options);
  return await res.json();
};

export const deleteContact = async (id: number, token: string) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(`${BASE_URL}/contacts/${id}`, options);

  return await res.json();
};
