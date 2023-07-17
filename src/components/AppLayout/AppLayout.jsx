import Header from './../Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
