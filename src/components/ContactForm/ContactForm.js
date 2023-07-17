import { useState } from 'react';
// import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactForm.module.css';
import { createContactThunk } from '../../redux/contacts/contactsThunks';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import toast from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';

function ContactForm() {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { token } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} already in contacts.`);
    }

    const newContact = {
      name,
      number,
    };

    dispatch(createContactThunk({ data: newContact, token })).then(() => {
      toast.success('Contact was successfully created!');
      setNameValue('');
      setNumberValue('');
    });
  };

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
            placeholder="Sebastián Ramírez"
            maxLength="25"
            onChange={e => setNameValue(e.target.value)}
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
            maxLength="25"
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
}

export default ContactForm;
