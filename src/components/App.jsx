// import { lazy, Suspense } from 'react';
// const LoginPage = lazy(() => import('./pages/LoginPage'));
// const ToDoDetails = lazy(() => import('./ToDo/ToDoDetails'));
// const HomePage = lazy(() => import('./pages/HomePage'));
// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import PublicRoute from './PublicRoute /PublicRoute ';

import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import AppLayout from './AppLayout/AppLayout';

import RegistrationPage from 'pages/RegistrationPage';
import ContactsPage from 'pages/ContactsPage';
import PageNotFound from 'pages/PageNotFound';
import LoginPage from 'pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<ContactsPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
