import { createSlice } from '@reduxjs/toolkit';
import { memoize } from 'proxy-memoize'

const initialState = {
  contacts: [],
  filter: ""
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload
    },
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload
    }
  },
});

export const {
  addContact,
  deleteContact,
  setContacts,
  setFilter
} = contactsSlice.actions;

export default contactsSlice.reducer;

export const getFilter = state => state.filter;

export const getContacts = state => state.contacts;

export const getFilteredContacts = memoize((state) => {
  const { filter, contacts } = state;
  if (filter) return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))
  return contacts
})