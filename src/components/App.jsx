import { useDispatch, useSelector } from 'react-redux';

import ContactList from './Contact/ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/thunks';
import Spinner from './Spinner/Spinner';
import Sort from './Sort/Sort';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1>Phonebook📘</h1>
      <ContactForm />
      <h2>Contacts👁‍🗨</h2>
      {contacts.length > 0 && (
        <div className={css.filters}>
          <Filter />
          <span className={css.sort}>
            <Sort />
          </span>
        </div>
      )}
      <hr />
      {isLoading && !error && <Spinner />}
      {!isLoading && error && <b>{error}</b>}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        "You don't have any contact yet🙃"
      )}
    </div>
  );
}
