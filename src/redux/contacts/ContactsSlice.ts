import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from '../initialState';
import {
  createContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contactsThunks';
import { STATUS_ENUM } from 'types/types';

const STATUS = {
  pending: STATUS_ENUM.PENDING,
  fulfilled: STATUS_ENUM.FULFILLED,
  rejected: STATUS_ENUM.REJECTED,
};

const thunks = [createContactThunk, deleteContactThunk, getContactsThunk];

const getTypes = (type: keyof typeof STATUS) => thunks.map(el => el[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder => {
    const { pending, fulfilled, rejected } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(createContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(isAnyOf(...getTypes(pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getTypes(fulfilled)), state => {
        state.isLoading = false;
        state.error = '';
      })
      .addMatcher(isAnyOf(...getTypes(rejected)), (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default contactsSlice.reducer;
