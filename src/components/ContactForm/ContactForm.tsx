import { useState } from 'react';
import toast from 'react-hot-toast';

import css from './ContactForm.module.css';
import { createContactThunk } from '../../redux/contacts/contactsThunks';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useAuth } from 'hooks/useAuth';
import { Contact, NewContact } from 'types/types';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

type FormFields = {
  name: HTMLInputElement;
  number: HTMLInputElement;
};

const ContactForm: React.FC = () => {
  const [nameValue, setNameValue] = useState<string>('');
  const [numberValue, setNumberValue] = useState<string>('');

  const dispatch = useAppDispatch();
  const contacts: Contact[] = useAppSelector(selectContacts);
  const { token } = useAuth();

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement & FormFields
  > = e => {
    e.preventDefault();
    console.log('click');
    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      return toast.error(`${name} is already in contacts🙂`);
    }

    const newContact: NewContact = {
      name,
      number,
    };

    if (token)
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
            maxLength={25}
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
            maxLength={25}
            onChange={e => setNumberValue(e.target.value)}
            value={numberValue}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
