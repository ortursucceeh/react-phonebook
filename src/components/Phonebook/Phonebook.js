import { Component } from 'react';
import css from './Phonebook.module.css';

class Phonebook extends Component {
  handleSubmit = evt => {
    const { createUser } = this.props;
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    const userData = {
      name,
      number,
    };
    createUser(userData);
    form.reset();
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Phonebook;
