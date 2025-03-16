

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Parse } from '../../../services/parse';
import { Link } from "react-router";

import styles from "./Register.module.css"

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.rePassword) {
      setMessage("Паролите не съвпадат!");
      return;
    }

    const user = new Parse.User();
    user.set("username", formData.username);
    user.set("email", formData.email);
    user.set("password", formData.password);

    try {
      // Sign up the user
      await user.signUp();

      // Log the user in immediately after successful registration
      const loggedUser = await Parse.User.logIn(formData.username, formData.password);

      // Save session token to localStorage
      localStorage.setItem("sessionToken", loggedUser.getSessionToken());

      setMessage("Registration successful.");
      
      // Redirect to the gallery page
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
