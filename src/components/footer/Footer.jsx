import { FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <a href="https://www.facebook.com/VDACleaning" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          <FaFacebook />
          <span>Facebook</span>
        </a>
        <a href="tel:+359123456789" className={styles.footerLink}>
          <FaPhoneAlt />
          <span>+359 123 456 789</span>
        </a>
        <a href="/contact" className={styles.footerLink}>
          <FaEnvelope />
          <span>correctcleaningbg@gmail.com</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;


