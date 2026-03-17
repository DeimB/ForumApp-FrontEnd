import styles from "./styles.module.css";
import Link from "next/link";

type RegisterFormProps = {
  name: string;
  setName: (x: string) => void;
  email: string;
  setEmail: (x: string) => void;
  password: string;
  setPassword: (x: string) => void;
  onFormSubmit: () => void;
  error: string | null;
};

const RegisterForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  onFormSubmit,
  error,
}: RegisterFormProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <div className={styles.icon}>👤</div>
        <h2>Create Account</h2>
      </div>
      <div className={styles.form}>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h6 className={styles.hint}>
            * Name must be at least 2 characters long
          </h6>
        </div>
        <div className={styles.formField}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h6 className={styles.hint}>
            * Password must consist of at least 6 characters and one number
          </h6>
        </div>
        <button className={styles.submitButton} onClick={onFormSubmit}>
          Sign Up
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.divider}>
        <hr />
        <span>or</span>
        <hr />
      </div>
      <div className={styles.loginLink}>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
