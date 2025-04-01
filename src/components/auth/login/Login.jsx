


import { Link } from "react-router-dom";
import { useLogin } from "../../../hooks/useLogin"; 
import styles from "../Forms.module.css";

export default function Login() {
  const { formData,  handleChange, handleSubmit,  isLoading } = useLogin();

  const isFormValid = formData.email.length >= 9 && formData.password.length >= 6;

  if (isLoading) {
    return (
      <div className={styles.loader}>
      <div className={styles.circle}></div> 
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

        {/* <div className={styles.fieldcheck}>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div> */}

        <button
          className={`${styles.btnreglog} ${isFormValid ? styles.btnValid : styles.btnDisabled}`}
          type="submit"
          disabled={!isFormValid || isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="login">
          No account yet? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}


// import { Link } from "react-router-dom";
// import { useLogin } from "../../../hooks/useLogin"; 
// import styles from "../Forms.module.css";

// export default function Login() {
//   const { formData, rememberMe, handleChange, handleSubmit, setRememberMe, validateEmail, validatePassword, errors, isLoading } = useLogin();

//   const isFormValid = !errors.email && !errors.password && formData.email.length >= 9 && formData.password.length >= 6;

//   if (isLoading) {
//     return (
//       <div className={styles.loader}>
//         <div className={styles.circle}></div> 
//       </div>
//     );
//   }

//   return (
//     <div className={styles.logincenter}>
//       <form className={styles.login} onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <div className={styles.field}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email-login"
//             placeholder=""
//             value={formData.email}
//             onChange={handleChange}
//             onBlur={validateEmail}
//           />
//           {errors.email && <span className={styles.error}>{errors.email}</span>}
//           <span className={styles.helpinfo}>example: iviave@abv.bg</span>
//         </div>

//         <div className={styles.field}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password-login"
//             placeholder=""
//             value={formData.password}
//             onChange={handleChange}
//             onBlur={validatePassword}
//           />
//           {errors.password && <span className={styles.error}>{errors.password}</span>}
//           <span className={styles.helpinfo}>Minimum 6 characters, letters and numbers, at least 1 special character</span>
//         </div>

//         <div className={styles.fieldcheck}>
//           <label>
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//             />
//             Remember Me
//           </label>
//         </div>

//         <button
//           className={`${styles.btnreglog} ${isFormValid ? styles.btnValid : styles.btnDisabled}`}
//           type="submit"
//           disabled={!isFormValid || isLoading}>
//           {isLoading ? "Logging in..." : "Login"}
//         </button>

//         <p className="login">
//           No account yet? <Link to="/register">Register here</Link>
//         </p>
//       </form>
//     </div>
//   );
// }
