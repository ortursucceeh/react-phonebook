import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/ContactsSlice';
import filterReducer from './contacts/FilterSlice';
import sortReducer from './contacts/SortSlice';
import userReducer from './auth/UserSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    sort: sortReducer,
    user: userReducer,
  },
});

export default store;
