import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  getContacts,
} from '../../services/apiContacts';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', token =>
  getContacts(token)
);

export const createContactThunk = createAsyncThunk(
  'contacts/addContact',
  ({ data, token }) => createContact(data, token)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  ({ id, token }) => deleteContact(id, token)
);
