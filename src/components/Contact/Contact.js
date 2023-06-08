import { Component } from 'react';
import css from './Contact.module.css';

class Contact extends Component {
  render() {
    const { contact, deleteContact } = this.props;

    return (
      <li className={`${css['contact']} list-group-item`}>
        <span>
          {contact.name}: {contact.number}
        </span>
        <button
          className="btn btn-dark"
          type="submit"
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default Contact;
