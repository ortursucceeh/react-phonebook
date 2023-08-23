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
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/ContactsSlice';
import filterReducer from './contacts/FilterSlice';
import sortReducer from './contacts/SortSlice';
import userReducer from './auth/AuthSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(authPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    sort: sortReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
