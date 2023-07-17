// import { lazy, Suspense } from 'react';
// const LoginPage = lazy(() => import('./pages/LoginPage'));
// const ToDoDetails = lazy(() => import('./ToDo/ToDoDetails'));
// const HomePage = lazy(() => import('./pages/HomePage'));

import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import AppLayout from './AppLayout/AppLayout';

import RegistrationPage from 'pages/RegistrationPage';
import ContactsPage from 'pages/ContactsPage';
import PageNotFound from 'pages/PageNotFound';
import LoginPage from 'pages/LoginPage';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './ProtectedRoutre/ProtectedRoutre';

function App() {
  return (
    <Provider store={store}>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<ContactsPage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
