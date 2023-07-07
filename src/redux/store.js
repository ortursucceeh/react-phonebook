import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactsSlice';
import filterReducer from './FilterSlice';
import sortReducer from './SortSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    sort: sortReducer,
  },
});

export default store;
