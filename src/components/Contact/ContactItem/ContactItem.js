import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import propTypes from 'prop-types';
import { deleteContact } from 'components/AppSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  function removeContact(id) {
    dispatch(deleteContact(id))
  }

  return (
    <li className={`${css.contact} list-group-item`}>
      <div className={css.contactInfo}>
        <span className={css.name}>{name}: </span>
        <span className={css.number}>{number}</span>  
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
  number: propTypes.string.isRequired
};

export default Contact;
