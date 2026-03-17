import styles from "./styles.module.css";
import Link from "next/link";

type FooterProps = {
  logo: string;
};

const Footer = ({ logo }: FooterProps) => {
  return (
    <footer className={styles.main}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            {logo}
          </Link>
          <p className={styles.description}>
            A place to ask questions, discuss, learn and grow with other curious
            people.
          </p>
        </div>
        <nav>
          <h3>Explore</h3>
          <ul>
            <li>
              <Link href="/" className={styles.questionsLink}>
                Questions
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h3>Support</h3>
          <ul>
            <li>
              <Link href="#" className={styles.link}>
                Help
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2026 {logo}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
