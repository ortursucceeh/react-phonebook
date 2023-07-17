import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { getContactsThunk } from 'redux/contacts/contactsThunks';
import { useAuth } from './useAuth';

export function useContacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { token } = useAuth();

  useEffect(() => {
    dispatch(getContactsThunk(token));
  }, [dispatch, token]);

  return { contacts, isLoading, error };
}
