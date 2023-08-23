import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import styles from './Register.module.css';
import { signupThunk } from 'redux/auth/authThunks';
import { useAuth } from 'hooks/useAuth';
import { useAppDispatch } from 'hooks/useAppDispatch';

type FormFields = {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
};

function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAuth();

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement & FormFields
  > = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form;

    dispatch(
      signupThunk({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    )
      .then(() => {
        toast.success('Your account was successfully created!');
        navigate('/home');
      })
      .catch(() => {
        toast.error('Wrong credentials');
      });
  };

  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            autoComplete="on"
          />
        </div>
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
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isLoading ? 'Loading...' : 'Sign up'}
        </button>
        <p className="mt-2">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
