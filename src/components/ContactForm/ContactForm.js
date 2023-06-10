import { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    nameValue: '',
    numberValue: '',
  };

  handleSubmit = evt => {
    const { createContact } = this.props;
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    const userData = {
      name,
      number,
    };
    createContact(userData);
    this.setState({ nameValue: '', numberValue: '' });
  };

  handleNameInputChange = ({ target: { value } }) => {
    this.setState({ nameValue: value });
  };

  handleNumberInputChange = ({ target: { value } }) => {
    this.setState({ numberValue: value });
  };

  render() {
    return (
      <div className={css['contact-form']}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Cristiano Ronaldo"
              onChange={this.handleNameInputChange}
              value={this.state.nameValue}
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
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="227-91-26"
              onChange={this.handleNumberInputChange}
              value={this.state.numberValue}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default ContactForm;
