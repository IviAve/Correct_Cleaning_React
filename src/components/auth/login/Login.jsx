


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; 
// import { useContext } from "react";
// import { AuthContext } from "../../../hooks/authCont";

// import { Link } from "react-router";
// import { Parse } from "../../../services/parse";
// import styles from "../Forms.module.css";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
    
//     const checkSession = async () => {
//       try {
//         const currentUser = Parse.User.current();
//         if (currentUser) {
//           setMessage(`Welcome, ${currentUser.get("username")}!`);
//           navigate("/gallery"); 
//         } else {
//           const sessionToken = localStorage.getItem("sessionToken");
//           if (sessionToken) {
//             const user = await Parse.User.become(sessionToken);
//             setMessage(`Welcome, ${user.get("username")}!`);
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

//     try {
//       await login(formData.email, formData.password, rememberMe);
//       setMessage("Welcome!");
//       navigate("/gallery"); 
//     } catch (error) {
//       setMessage("Error: " + error.message);
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
        
        
//         {message && <p className={styles.message}>{message}</p>}
//       </form>
//     </div>
//   );
// }


import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../context/authContext/authCont";
import { useError } from "../../context/error/useError"; 
import { Link } from "react-router-dom";
import { Parse } from "../../../services/parse";
import styles from "../Forms.module.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const { showError } = useError(); 
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const currentUser = Parse.User.current();
        if (currentUser) {
          navigate("/gallery"); 
        } else {
          const sessionToken = localStorage.getItem("sessionToken");
          if (sessionToken) {
            await Parse.User.become(sessionToken);
            navigate("/gallery"); 
          }
        }
      } catch (error) {
        console.error("Session restore error:", error);
      }
    };

    checkSession();
  }, [navigate]); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData.email, formData.password, rememberMe);
      navigate("/gallery"); 
    } catch (error) {
      showError(error.message); 

      setFormData((prevData) => ({ ...prevData,password: "",
        
      }))
    }
  };

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
