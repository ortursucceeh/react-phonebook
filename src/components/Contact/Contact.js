import { Component } from 'react';
import css from './Contact.module.css';

class Contact extends Component {
  render() {
    const { contact } = this.props;

    return (
      <li className={`${css['contact']} list-group-item`}>
        {contact.name}: {contact.number}
      </li>
    );
  }
}

export default Contact;
