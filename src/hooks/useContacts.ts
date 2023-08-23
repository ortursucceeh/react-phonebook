import { useEffect } from 'react';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { getContactsThunk } from 'redux/contacts/contactsThunks';
import { useAuth } from './useAuth';
import { useAppSelector } from './useAppSelector';
import { useAppDispatch } from './useAppDispatch';

export const useContacts = () => {
  const dispatch = useAppDispatch();

  const contacts = useAppSelector(selectContacts);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const { token } = useAuth();

  useEffect(() => {
    if (token) dispatch(getContactsThunk(token));
  }, [dispatch, token]);

  return { contacts, isLoading, error };
};
