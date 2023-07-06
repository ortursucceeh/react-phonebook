import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  getContacts,
} from './../services/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getContacts()
);

export const createContactsThunk = createAsyncThunk(
  'contacts/addContact',
  data => createContact(data)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
