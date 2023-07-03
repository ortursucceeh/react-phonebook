import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactForm.module.css';
import { addContact, getContacts } from 'redux/AppSlice';

function ContactForm() {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} already in contacts.`)
      return
    }

    const newContact = {
      name,
      number,
      id: nanoid()
    }

    dispatch(addContact(newContact))

    setNameValue('');
    setNumberValue('');
  }

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label">
            Contact name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Cristiano Ronaldo"
            onChange={e => setNameValue(e.target.value)}
            maxLength="25"
            value={nameValue}
            required
          />
        </div>
        <div>
          <label htmlFor="number" className="form-label">
            Phone number
          </label>
          <input
            type="tel"
            name="number"
            className="form-control"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="012-345-67-89"
            onChange={e => setNumberValue(e.target.value)}
            value={numberValue}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
