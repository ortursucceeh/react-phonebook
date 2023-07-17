import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './../initialState';
import {
  createContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contactsThunks';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunks = [createContactThunk, deleteContactThunk, getContactsThunk];

const getTypes = type => thunks.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, { payload }) => {
  state.contacts = payload;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.contacts.push(payload);
};

const handleFulfilledDel = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
      .addMatcher(isAnyOf(...getTypes(PENDING)), handlePending)
      .addMatcher(isAnyOf(...getTypes(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...getTypes(REJECTED)), handleRejected);
  },
});

export default contactsSlice.reducer;
