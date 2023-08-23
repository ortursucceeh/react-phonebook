import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './AppLayout.module.css';

const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
