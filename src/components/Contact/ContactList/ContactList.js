import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { selectFilteredContacts } from 'redux/selectors';

function Contacts() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.wrapper}>
      <ul className={`${css.contacts} list-group list-group-numbered`}>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phone={contact.phone}
          />
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
