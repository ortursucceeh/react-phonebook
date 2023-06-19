import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <div className={css.wrapper}>
      <ul className={`${css.contacts} list-group list-group-numbered`}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
