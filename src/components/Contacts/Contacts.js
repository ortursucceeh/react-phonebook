import { Component } from 'react';
import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    const { contacts, filter, deleteContact } = this.props;

    return (
      <div className={css['contacts']}>
        <ul
          className={`${css['contacts__list']} list-group list-group-numbered`}
        >
          {!filter
            ? contacts.map(contact => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                  deleteContact={deleteContact}
                />
              ))
            : contacts
                .filter(contact =>
                  contact.name.toLowerCase().includes(filter.toLowerCase())
                )
                .map(contact => (
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
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
