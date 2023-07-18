import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from 'redux/store';

import AppLayout from './AppLayout/AppLayout';
import ProtectedRoute from './ProtectedRoutre/ProtectedRoutre';

import RegistrationPage from 'pages/RegistrationPage';
import ContactsPage from 'pages/ContactsPage';
import PageNotFound from 'pages/PageNotFound';
import LoginPage from 'pages/LoginPage';

function App() {
  return (
    <Provider store={store}>
      <Toaster />

      <BrowserRouter basename="/goit-react-hw-02-phonebook">
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="/contacts" />} />
            <Route path="/contacts" element={<ContactsPage />} />
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
