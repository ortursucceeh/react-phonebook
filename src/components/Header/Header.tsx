import { NavLink } from 'react-router-dom';

import css from './Header.module.css';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';

function Header() {
  const { token } = useAuth();

  return (
    <nav className={css.navbar}>
      <li className={css.mainPages}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      {token ? (
        <li>
          <UserMenu />
        </li>
      ) : (
        <li className={css.buttons}>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </li>
      )}
    </nav>
  );
}

export default Header;
