import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/ContactsSlice';
import filterReducer from './contacts/FilterSlice';
import sortReducer from './contacts/SortSlice';
import userReducer from './auth/UserSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  storage,
};

const persistedReducer = persistReducer(userPersistConfig, userReducer);

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    sort: sortReducer,
    user: persistedReducer,
  },
  middleware,
});

export default store;
export const persistor = persistStore(store);
