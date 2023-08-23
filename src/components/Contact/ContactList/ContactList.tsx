import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { selectSortedContacts } from 'redux/contacts/contactsSelectors';
import { Contact } from 'types/types';
import { useAppSelector } from 'hooks/useAppSelector';

const Contacts: React.FC = () => {
  const contacts: Contact[] = useAppSelector(selectSortedContacts);

  return (
    <div className={css.wrapper}>
      <ul className={`${css.contacts} list-group list-group-numbered`}>
        {contacts.map(contact => (
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
};

export default Contacts;
