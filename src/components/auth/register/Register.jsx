

// import { Link } from "react-router-dom";
// import { useRegister } from "../../../hooks/useRegister"; 
// import styles from "../Forms.module.css";

// export default function Register() {
//   const { formData, handleChange, handleSubmit, isLoading } = useRegister();

//   if (isLoading) {
//     return (
//       <div className={styles.loader}>
//       <div className={styles.circle}></div> 
//     </div>
//     );
//   }

  

//   return (
//     <div className={styles.logincenter}>
//       <form className={styles.login} onSubmit={handleSubmit}>
//         <h2>Register</h2>

//         <div className={styles.field}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             placeholder=""
//             value={formData.username}
//             onChange={handleChange}
//           />
//           <span className={styles.helpinfo}>example: todorov</span>
//         </div>

//         <div className={styles.field}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder=""
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <span className={styles.helpinfo}>example: iviave@abv.bg</span>
//         </div>

//         <div className={styles.field}>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder=""
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <span className={styles.helpinfo}>minimum 6 characters, letters and numbers, at least 1 special character</span>
//         </div>

//         <div className={styles.field}>
//           <label htmlFor="confirm-password">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirm-password"
//             name="rePassword"
//             placeholder=""
//             value={formData.rePassword}
//             onChange={handleChange}
//           />
//         </div>

//         <button className={styles.btnreglog} type="submit">Register</button>
//         <p className="login">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </form>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { useRegister } from "../../../hooks/useRegister"; 
import styles from "../Forms.module.css";

export default function Register() {
  const { formData, handleChange, handleSubmit, isLoading } = useRegister();

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.circle}></div>
      </div>
    );
  }

  
  const isEmailValid = formData.email.length >= 9;
  const isPasswordValid = formData.password.length >= 6;
  const isPasswordsMatch = formData.password === formData.rePassword && formData.password.length > 0;

  const isFormValid = isEmailValid && isPasswordValid && isPasswordsMatch;

  return (
    <div className={styles.logincenter}>
      <form className={styles.login} onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className={styles.field}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder=""
            value={formData.username}
            onChange={handleChange}
          />
          <span className={styles.helpinfo}>example: todorov</span>
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
          />
          <span className={styles.helpinfo}>Email must be at least 9 characters</span>
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
          />
          <span className={styles.helpinfo}>Minimum 6 characters, letters and numbers, at least 1 special character</span>
        </div>

        <div className={styles.field}>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="rePassword"
            placeholder=""
            value={formData.rePassword}
            onChange={handleChange}
          />
          <span className={styles.helpinfo}>
            {isPasswordsMatch ? "✔ Passwords match" : "❌ Passwords do not match"}
          </span>
        </div>

        <button
          className={`${styles.btnreglog} ${isFormValid ? styles.btnValid : styles.btnDisabled}`}
          type="submit"
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p className="login">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}
