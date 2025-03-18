

// import { useState } from "react";
// import { useNavigate } from "react-router"; 
// import { Parse } from '../../../services/parse';
// import { Link } from "react-router";

// import styles from "../Forms.module.css"

// export default function Register() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     rePassword: "",
//   });

//   const [message, setMessage] = useState("");
//   const navigate = useNavigate(); 

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.rePassword) {
//       setMessage("Паролите не съвпадат!");
//       return;
//     }

//     const user = new Parse.User();
//     user.set("username", formData.username);
//     user.set("email", formData.email);
//     user.set("password", formData.password);

//     try {
      
//       await user.signUp();

      
//       const loggedUser = await Parse.User.logIn(formData.username, formData.password);

      
//       localStorage.setItem("sessionToken", loggedUser.getSessionToken());

//       setMessage("Registration successful.");
      
      
//       navigate("/gallery");
//     } catch (error) {
//       setMessage("Error: " + error.message);
//     }
//   };

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
//         {message && <p className={styles.message}>{message}</p>}
//       </form>
//     </div>
    
//   );
// }

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../hooks/authCont";
import { Parse } from "../../../services/parse";
import styles from "../Forms.module.css";

import { Link } from "react-router";

export default function Register() {
  const { login } = useContext(AuthContext);  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.rePassword) {
      setMessage("The passwords do not match!");
      return;
    }

    const user = new Parse.User();
    user.set("username", formData.username);
    user.set("email", formData.email);
    user.set("password", formData.password);

    try {
      
      await user.signUp();

      
      await login(formData.email, formData.password, false);

      setMessage("Registration successful.");

      
      navigate("/gallery");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

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
          <span className={styles.helpinfo}>example: iviave@abv.bg</span>
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
          <span className={styles.helpinfo}>minimum 6 characters, letters and numbers, at least 1 special character</span>
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
        </div>

        <button className={styles.btnreglog} type="submit">Register</button>
        <p className="login">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
}
