import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { VscOctoface } from 'react-icons/vsc';

import { useAuth } from 'hooks/useAuth';
import { logoutThunk } from 'redux/auth/authThunks';
import styles from './UserMenu.module.css';
import { useAppDispatch } from 'hooks/useAppDispatch';

const UserMenu: React.FC = () => {
  const { token, email, name } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    if (token)
      dispatch(logoutThunk(token)).then(() => {
        toast.success('You was successfully logged out!');
        navigate('/contacts');
      });
  };

  return (
    <div className={styles.userMenu}>
      <p>{email}</p>
      <p>
        <VscOctoface />
        {name}
      </p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
