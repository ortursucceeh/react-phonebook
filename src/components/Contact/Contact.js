import { Component } from 'react';
import css from './Contact.module.css';

class Contact extends Component {
  render() {
    const { contact } = this.props;
    console.log('contact :>> ', contact);

    return (
      <li className={`${css['contact']} list-group-item`}>{contact.name}</li>
    );
  }
}

export default Contact;
