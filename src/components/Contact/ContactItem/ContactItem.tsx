import toast from 'react-hot-toast';

import css from './ContactItem.module.css';
import { deleteContactThunk } from 'redux/contacts/contactsThunks';
import { useAuth } from 'hooks/useAuth';
import { Contact } from 'types/types';
import { useAppDispatch } from 'hooks/useAppDispatch';

const ContactItem: React.FC<Contact> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();
  const { token } = useAuth();

  const removeContact = (id: number): void => {
    if (token)
      dispatch(deleteContactThunk({ id, token })).then(() => {
        toast(`Contact ${name} was deleted!`, {
          icon: '💥',
        });
      });
  };

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

export default ContactItem;
