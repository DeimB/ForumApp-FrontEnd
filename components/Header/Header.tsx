import styles from "./styles.module.css";
import Link from "next/link";

type HeaderProps = {
  logo: string;
};

const Header = ({ logo }: HeaderProps) => {
  return (
    <header className={styles.main}>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo}>
          {logo}
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/" className={styles.questionsLink}>
              Questions
            </Link>
          </li>
          <li>
            <Link href="/login" className={styles.loginLink}>
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className={styles.registerLink}>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
