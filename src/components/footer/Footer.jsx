import { FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          <FaFacebook />
          <span>Facebook</span>
        </a>
        <a href="tel:+359123456789" className={styles.footerLink}>
          <FaPhoneAlt />
          <span>+359 123 456 789</span>
        </a>
        <a href="mailto:example@email.com" className={styles.footerLink}>
          <FaEnvelope />
          <span>example@email.com</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;


