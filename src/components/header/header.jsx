

// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router"; // Импортираме Link и useNavigate
// import { Parse } from "../../parse";

// export default function HeaderArea() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate(); // Hook за навигация

//   useEffect(() => {
//     const currentUser = Parse.User.current();
//     if (currentUser) {
//       setUser(currentUser);
//     }
//   }, []);

//   const handleLogout = async () => {
//     await Parse.User.logOut();
//     setUser(null);
//     navigate("/"); // Пренасочване към началната страница след logout
//   };

//   return (
//     <div className="hero_area">
//       <header className="header_section">
//         <div className="header_top">
//           <div className="container-fluid">
//             <div className="contact_nav">
//               <Link to="/">
//                 <i className="fa fa-building" aria-hidden="true"></i>
//                 <span>Correct Cleaning</span>
//               </Link>
//               <Link to={user ? "/profile" : "/login"}>
//                 <i className="fa fa-user" aria-hidden="true"></i>
//                 <span>
//                   {user ? `Welcome, ${user.get("username")}` : "Guest"}
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="header_bottom">
//           <div className="container-fluid">
//             <nav className="navbar navbar-expand-lg custom_nav-container">
//               <Link className="navbar-brand" to="/">
//                 <span>
//                   <img
//                     src="images/logo.jpg"
//                     alt="Logo"
//                     style={{ width: "60px", height: "40px", marginRight: "8px", marginLeft: "0.2px" }}
//                   />
//                   Correct Cleaning
//                 </span>
//               </Link>

//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className=""> </span>
//               </button>

//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav">
//                   <li className="nav-item active">
//                     <Link className="nav-link" to="/">Home</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/about">About Us</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/gallery">Gallery</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/services">Services</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/contact">Contact Us</Link>
//                   </li>

//                   {user ? (
//                     <>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/profile">My Profile</Link>
//                       </li>

//                       <li className="nav-item">
//                         <Link className="nav-link" to="/CreateImg">Add Image</Link>
//                       </li>
//                       <li className="nav-item">
//                         <button className="nav-link btn btn-link" onClick={handleLogout}>
//                           Logout
//                         </button>
//                       </li>
//                     </>
//                   ) : (
//                     <>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/login">Login</Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/register">Register</Link>
//                       </li>
//                     </>
//                   )}
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { Parse } from "../../parse";

export default function HeaderArea() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const currentUser = Parse.User.current();
    setUser(currentUser);  
  }, []);

  const handleLogout = async () => {
    await Parse.User.logOut();
    setUser(null);
    navigate("/"); 
  };

  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="contact_nav">
              <Link to="/">
                <i className="fa fa-building" aria-hidden="true"></i>
                <span>Correct Cleaning</span>
              </Link>
              <Link to={user ? "/profile" : "/login"}>
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>
                  {user ? `Welcome, ${user.get("username")}` : "Guest"}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to="/">
                <span>
                  <img
                    src="images/logo.jpg"
                    alt="Logo"
                    style={{ width: "60px", height: "40px", marginRight: "8px", marginLeft: "0.2px" }}
                  />
                  Correct Cleaning
                </span>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>

                  {user ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/profile">My Profile</Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/CreateImg">Add Image</Link>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link btn btn-link" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
