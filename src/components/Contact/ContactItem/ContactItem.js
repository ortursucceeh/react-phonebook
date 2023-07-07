import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import propTypes from 'prop-types';
import { deleteContactsThunk } from 'redux/thunks';
import toast from 'react-hot-toast';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  function removeContact(id) {
    toast(`Contact ${name} was deleted!`, {
      icon: '💥',
    });
    dispatch(deleteContactsThunk(id));
  }

  return (
    <li className={`${css.contact} list-group-item`}>
      <div className={css.contactInfo}>
        <span className={css.name}>{name}</span>
        <span className={css.number}>+{phone}</span>
      </div>

      <button
        className="btn btn-dark"
        type="submit"
        onClick={() => removeContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
};

export default Contact;
