import { Component } from 'react';
import css from './Contact.module.css';
import propTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { id, name, number, deleteContact } = this.props;

    return (
      <li className={`${css['contact']} list-group-item`}>
        <span>
          {name}: {number}
        </span>
        <button
          className="btn btn-dark"
          type="submit"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

Contact.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.number.isRequired,
  deleteContact: propTypes.func.isRequired,
};

export default Contact;
