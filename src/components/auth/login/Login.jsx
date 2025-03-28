


import { Link } from "react-router-dom";
import { useLogin } from "../../../hooks/useLogin"; 
import styles from "../Forms.module.css";

export default function Login() {
  const { formData, rememberMe, handleChange, handleSubmit, setRememberMe, isLoading } = useLogin();

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <p>Loading...</p> 
      </div>
    );
  }

  return (
    <div className={styles.logincenter}>
      <form className={styles.login} onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email-login"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
          />
          <span className={styles.helpinfo}>example: iviave@abv.bg</span>
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password-login"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
          />
          <span className={styles.helpinfo}>Minimum 6 characters, letters and numbers, at least 1 special character</span>
        </div>

        <div className={styles.fieldcheck}>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div>

        <button className={styles.btnreglog} type="submit">Login</button>

        <p className="login">
          No account yet? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}
