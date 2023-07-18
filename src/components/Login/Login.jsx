import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Login.module.css';
import { useAuth } from 'hooks/useAuth';
import { loginThunk } from 'redux/auth/authThunks';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    dispatch(loginThunk({ email, password }))
      .then(() => {
        toast.success(`You are logged in!`);
        navigate('/contacts');
      })
      .catch(() => {
        toast.error('Wrong credentials');
      });
  }

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
            aria-describedby="emailHelp"
            autoComplete="on"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            autoComplete="on"
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
}

export default Login;
