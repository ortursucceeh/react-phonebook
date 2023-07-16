import Header from './../Header/Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
