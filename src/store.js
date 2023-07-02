import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './components/AppSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
