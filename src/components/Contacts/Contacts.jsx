import ContactList from './../Contact/ContactList/ContactList';
import ContactForm from './../ContactForm/ContactForm';
import Filter from './../Filter/Filter';
import css from './Contacts.module.css';
import { RiContactsBookLine } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import Spinner from './../Spinner/Spinner';
import Sort from './../Sort/Sort';
import { useContacts } from 'hooks/useContacts';

function Contacts() {
  const { contacts, isLoading, error } = useContacts();

  return (
    <div className={css.contacts}>
      <h1>
        Phonebook <RiContactsBookLine />
      </h1>
      <ContactForm />
      <h2>
        Contacts
        <IoMdContacts />
      </h2>
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

export default Contacts;
