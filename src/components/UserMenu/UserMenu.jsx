import { useAuth } from 'hooks/useAuth';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/authThunks';
import { VscOctoface } from 'react-icons/vsc';
import styles from './UserMenu.module.css';

function UserMenu() {
  const { token, email, name } = useAuth();
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logoutThunk(token));
    toast.success('You was successfully logged out!');
    Navigate('/home');
  }

  return (
    <div className={styles.userMenu}>
      <p>{email}</p>
      <p>
        {name}
        <VscOctoface />
      </p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
