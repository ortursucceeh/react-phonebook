import styles from './Register.module.css';

function Register() {
  return (
    <div className={styles.register}>
      <h1>Registration</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password1" />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            Confirm password
          </label>
          <input type="password" className="form-control" id="password2" />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
