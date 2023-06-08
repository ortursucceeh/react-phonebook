import { Component } from 'react';
import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';

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
                  contact={contact}
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
                    contact={contact}
                    deleteContact={deleteContact}
                  />
                ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
