import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';

function Header() {
  const { token } = useAuth();

  return (
    <nav className={styles.navbar}>
      <li>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      {token ? (
        <li>
          <UserMenu token={token} />
        </li>
      ) : (
        <li className={styles.buttons}>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </li>
      )}
    </nav>
  );
}

export default Header;
