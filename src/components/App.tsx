import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store, { persistor } from 'redux/store';

import AppLayout from './AppLayout/AppLayout';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import RegistrationPage from 'pages/RegistrationPage';
import ContactsPage from 'pages/ContactsPage';
import PageNotFound from 'pages/PageNotFound';
import LoginPage from 'pages/LoginPage';
import { PersistGate } from 'redux-persist/integration/react';
import HomePage from 'pages/HomePage';
import PublicRoute from './PublicRoute/PublicRoute';

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename="/goit-react-hw-02-phonebook">
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/home" element={<HomePage />} />
            </Route>

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
