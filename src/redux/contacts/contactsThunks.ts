import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  getContacts,
} from '../../services/apiContacts';

import { Contact, NewContact } from 'types/types';

export const getContactsThunk = createAsyncThunk<Contact[], string>(
  'contacts/fetchAll',
  token => getContacts(token)
);

export const createContactThunk = createAsyncThunk<
  Contact,
  { data: NewContact; token: string }
>('contacts/addContact', ({ data, token }) => createContact(data, token));

export const deleteContactThunk = createAsyncThunk<
  { id: number },
  { id: number; token: string }
>('contacts/deleteContact', ({ id, token }) => deleteContact(id, token));
