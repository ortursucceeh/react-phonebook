import styles from './Register.module.css';
import { useDispatch } from 'react-redux';
import { signupThunk } from 'redux/auth/authThunks';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    dispatch(signupThunk({ name, email, password }));
    toast.success('Your account was successfulle created!');
    navigate('/home');
  }

  return (
    <div className={styles.register}>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="text"
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

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <p className="mt-2">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
