import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  getContacts,
} from '../../services/apiContacts';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getContacts()
);

export const createContactThunk = createAsyncThunk(
  'contacts/addContact',
  data => createContact(data)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
