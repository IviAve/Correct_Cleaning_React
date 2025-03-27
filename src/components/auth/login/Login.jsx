


// import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom"; 
// import { AuthContext } from "../../context/authContext/authCont";
// import { useError } from "../../context/error/useError"; 
// import { Link } from "react-router-dom";
// import { Parse } from "../../../services/parse";
// import styles from "../Forms.module.css";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const { showError } = useError(); 
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         const currentUser = Parse.User.current();
//         if (currentUser) {
//           navigate("/gallery"); 
//         } else {
//           const sessionToken = localStorage.getItem("sessionToken");
//           if (sessionToken) {
//             await Parse.User.become(sessionToken);
//             navigate("/gallery"); 
//           }
//         }
//       } catch (error) {
//         console.error("Session restore error:", error);
//       }
//     };

//     checkSession();
//   }, [navigate]); 

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     if (!formData.email.includes("@") || formData.email.length < 9) {
//       showError("Email must included @ and must be  min 9 characters .");
//       return;
//     }

//     if (formData.password.length < 6) {
//       showError("Password must be min 6 characters.");
//       return;
//     }
//     try {
//       await login(formData.email, formData.password, rememberMe);
//       navigate("/gallery"); 
//     } catch (error) {
//       showError(error.message); 

//       setFormData((prevData) => ({ ...prevData,password: "",
        
//       }))
//     }
//   };

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
//           />
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
//           />
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

//         <button className={styles.btnreglog} type="submit">Login</button>

//         <p className="login">
//           No account yet? <Link to="/register">Register here</Link>
//         </p>
//       </form>
//     </div>
//   );
// }


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
