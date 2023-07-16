import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.navbar}>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </nav>
  );
}

export default Header;
