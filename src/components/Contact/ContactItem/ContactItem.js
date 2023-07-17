import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import toast from 'react-hot-toast';

import css from './ContactItem.module.css';
import { deleteContactThunk } from 'redux/contacts/contactsThunks';
import { useAuth } from 'hooks/useAuth';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { token } = useAuth();

  function removeContact(id) {
    dispatch(deleteContactThunk({ id, token })).then(() => {
      toast(`Contact ${name} was deleted!`, {
        icon: '💥',
      });
    });
  }

  return (
    <li className={`${css.contact} list-group-item`}>
      <div className={css.contactInfo}>
        <span className={css.name}>{name}</span>
        <span className={css.number}>+{number}</span>
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

ContactItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default ContactItem;
