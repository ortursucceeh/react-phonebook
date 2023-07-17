import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { getContactsThunk } from 'redux/contacts/contactsThunks';

export function useContacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return { contacts, isLoading, error };
}
