import styles from "./Page-404.module.css";
import { Link } from "react-router-dom"; // Ако използваш React Router

export default function Page404() {
  return (
    <section id="not-found-page" className={styles.notFoundPageContainer}>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Let&apos;s go <Link to="/">home</Link> and try from there.</p>
      </div>
    </section>
  );
}



