import styles from "./Page-404.module.css";


import { Link } from "react-router"; 

export default function Page404() {
  return (
    <>
      <section >
  <div className={styles.notFoundPageContainer}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Let&#39;s go <Link to="/home">home</Link> and try from there.</p>
  </div>
</section>
      
    </>
  )
}