const BASE_URL = 'https://64a68483096b3f0fcc7ff23a.mockapi.io/api/';

export async function getContacts() {
  const data = await fetch(`${BASE_URL}/contacts`);
  return await data.json();
}

export async function createContact(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(`${BASE_URL}/contacts`, options);
  return await res.json();
}

export async function deleteContact(id) {
  const options = {
    method: 'DELETE',
  };
  const res = await fetch(`${BASE_URL}/contacts/${id}`, options);

  return await res.json();
}
