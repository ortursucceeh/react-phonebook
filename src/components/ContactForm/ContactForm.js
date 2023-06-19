import { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = props => {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    props.createContact({
      name,
      number,
    });
    setNameValue('');
    setNumberValue('');
  };

  const handleNameInputChange = ({ target: { value } }) => {
    setNameValue(value);
  };

  const handleNumberInputChange = ({ target: { value } }) => {
    setNumberValue(value);
  };

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Cristiano Ronaldo"
            onChange={handleNameInputChange}
            value={nameValue}
            required
          />
        </div>
        <div>
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            type="tel"
            name="number"
            className="form-control"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="227-91-26"
            onChange={handleNumberInputChange}
            value={numberValue}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default ContactForm;
