import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import { useAuth } from 'hooks/useAuth';
import { loginThunk } from 'redux/auth/authThunks';
import { useAppDispatch } from 'hooks/useAppDispatch';

type FormFields = {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAuth();

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement & FormFields
  > = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form;

    dispatch(loginThunk({ email: email.value, password: password.value }))
      .then(() => {
        toast.success(`You are logged in!`);
        navigate('/home');
      })
      .catch(() => {
        toast.error('Wrong credentials');
      });
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            autoComplete="on"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            autoComplete="on"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Log in '}
        </button>
        <p className="mt-2">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
