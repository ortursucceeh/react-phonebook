import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { getContacts } from 'redux/ContactsSlice';

import { getFilter } from 'redux/FilterSlice';

function Contacts() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <div className={css.wrapper}>
      <ul className={`${css.contacts} list-group list-group-numbered`}>
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
