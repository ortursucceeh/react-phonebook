import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactsSlice';
import filterReducer from './FilterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
