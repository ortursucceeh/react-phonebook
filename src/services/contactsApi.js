const BASE_URL = 'https://64a68483096b3f0fcc7ff23a.mockapi.io/api/';

export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return await data.json();
};

export const createContact = async data => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(`${BASE_URL}/contacts`, options);
  return await res.json();
};

export const deleteContact = async id => {
  const res = await fetch(`${BASE_URL}/contacts/${id}`);
  return await res.json();
};
