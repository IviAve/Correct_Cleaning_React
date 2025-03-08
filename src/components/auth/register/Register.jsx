// export default function Register() {
//     return(
//         <div className="login-center">
//         <form className="login"  method="POST">

//             <h2>Register</h2>
//       <div className="field">      
//    <label htmlFor="username">Username:</label>
//    <input type="text" id="username" name="username" placeholder="Username" />
//    <span className="help-info">example: todorov</span>
//    </div>

//    <div className="field">
//    <label htmlFor="email">Email:</label>
//    <input type="email" id="email" name="email"  placeholder="Email"/>
//    <span className="help-info">example: iviave@abv.bg</span>
//    </div>

//    <div className="field">
//    <label htmlFor="password">Password:</label>
//    <input type="password" id="password" name="password" placeholder="Password"/>
//    <span className="help-info">minimum 6 characters, letters and numbers, at least 1 special character</span>
//    </div>
// <div className="field">
//    <label htmlFor="confirm-password">Confirm Password:</label>
//    <input type="password" id="confirm-password" name="rePassword" placeholder="Re-Password"/>
//    </div>
//    <button className="btn-reg-log">Register</button>
//    <p className="login">Already have an account? <a href="/auth/login">Login here</a></p>
// </form>
// </div>
        
        
//     )
// }


// import { useState } from "react";
// import { Parse } from '../../../parse';

// export default function Register() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     rePassword: "",
//   });

//   const [message, setMessage] = useState("");

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
//       setMessage("Registration successful.");
//     } catch (error) {
//       setMessage("Error: " + error.message);
//     }
//   };

//   return (
    
//     <div className="login-center">
//       <form className="login" onSubmit={handleSubmit}>
//         <h2>Register</h2>

//         <div className="field">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           <span className="help-info">example: todorov</span>
//         </div>

//         <div className="field">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <span className="help-info">example: iviave@abv.bg</span>
//         </div>

//         <div className="field">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <span className="help-info">minimum 6 characters, letters and numbers, at least 1 special character</span>
//         </div>

//         <div className="field">
//           <label htmlFor="confirm-password">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirm-password"
//             name="rePassword"
//             placeholder="Re-Password"
//             value={formData.rePassword}
//             onChange={handleChange}
//           />
//         </div>

//         <button className="btn-reg-log" type="submit">Register</button>
//         <p className="login">
//           Already have an account? <a href="/login">Login here</a>
//         </p>
//         {message && <p className="message">{message}</p>}
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Parse } from '../../../parse';

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
    
    <div className="login-center">
      <form className="login" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <span className="help-info">example: todorov</span>
        </div>

        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="help-info">example: iviave@abv.bg</span>
        </div>

        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="help-info">minimum 6 characters, letters and numbers, at least 1 special character</span>
        </div>

        <div className="field">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="rePassword"
            placeholder="Re-Password"
            value={formData.rePassword}
            onChange={handleChange}
          />
        </div>

        <button className="btn-reg-log" type="submit">Register</button>
        <p className="login">
          Already have an account? <a href="/login">Login here</a>
        </p>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
    
  );
}
