import styles from "./styles.module.css";
import Link from "next/link";

type LoginFormProps = {
  email: string;
  setEmail: (x: string) => void;
  password: string;
  setPassword: (x: string) => void;
  onFormSubmit: () => void;
  error: string | null;
};

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  onFormSubmit,
  error,
}: LoginFormProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <div className={styles.icon}>👤</div>
        <h2>Login</h2>
      </div>
      <div className={styles.form}>
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
        </div>
        <button className={styles.submitButton} onClick={onFormSubmit}>
          Login
        </button>
      </div>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.divider}>
        <hr />
        <span>or</span>
        <hr />
      </div>
      <div className={styles.registerLink}>
        <p>
          Don&apos;t have an account? <Link href="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
