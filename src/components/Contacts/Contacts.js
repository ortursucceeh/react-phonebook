import { Component } from 'react';
import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    console.log('contacts :>> ', contacts);

    return (
      <div className={css['contacts']}>
        <h2>Contacts</h2>
        <ul
          className={`${css['contacts__list']} list-group list-group-numbered`}
        >
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
