import { Component } from 'react';
import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';
import Filter from 'components/Filter/Filter';

class Contacts extends Component {
  render() {
    const { contacts, filter } = this.props;
    console.log('contacts, filter :>> ', contacts, filter);

    return (
      <div className={css['contacts']}>
        <ul
          className={`${css['contacts__list']} list-group list-group-numbered`}
        >
          {!filter
            ? contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))
            : contacts
                .filter(contact =>
                  contact.name.toLowerCase().includes(filter.toLowerCase())
                )
                .map(contact => <Contact key={contact.id} contact={contact} />)}
        </ul>
      </div>
    );
  }
}

export default Contacts;
