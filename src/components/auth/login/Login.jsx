// export default function Login() {
//     return (
//         <>
//             <div className="login-center">
//                 <form className="login" method="POST">

//                     <h2>Login</h2>

//                     <div className="field">
//                         <label htmlFor="username">Email</label>
//                         <input type="email" name="email" id="email-login" placeholder="Email" />
//                         <span className="help-info">example: iviave@abv.bg</span>
//                     </div>

//                     <div className="field">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" name="password" id="password-login" placeholder="Password" />
//                         <span className="help-info">minimum 6 characters, letters and numbers, at least 1 special character</span>
//                     </div>

//                     <button className="btn-reg-log">Login</button>
//                     <p className="login">No have an account yet? <a href="/register">Register here</a></p>
//                 </form>
//             </div>
//         </>

//     )
// }

import { useState, useEffect } from "react";
import { Parse } from "../../../parse";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Проверявам дали има запомнен потребител в localStorage
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
      setFormData({ email: savedEmail, password: savedPassword });
      setRememberMe(true); // Показвам, че потребителят е избрал "Запомни ме"
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await Parse.User.logIn(formData.email, formData.password);
      setMessage(`Добре дошъл, ${user.get("username")}!`);

      // Записваме данните в localStorage, ако потребителят е избрал "Запомни ме"
      if (rememberMe) {
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
    } catch (error) {
      setMessage("Грешка: " + error.message);
    }
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="login-center">
      <form className="login" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email-login"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="help-info">example: iviave@abv.bg</span>
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password-login"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="help-info">Минимум 6 символа, букви, цифри, специален знак</span>
        </div>

        <div className="field-check">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Запомни ме
          </label>
        </div>

        <button className="btn-reg-log" type="submit">Login</button>
        <p className="login">
          No have an account yet? <a href="/register">Register here</a>
        </p>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
