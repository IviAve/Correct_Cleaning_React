export default function HeaderArea () {
return (
    
    
    <div className="hero_area">
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid">
              <div className="contact_nav">
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>
                    Call : +357 96 032003
                  </span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                    Email : demo@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="#">
                <span>
  <img src="images/logo.jpg" alt="Logo" style={{ width: '60px', height: '40px', marginRight: '8px' }} />
  Correct Cleaning
</span>

                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html"> About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="login.html"> Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="register.html"> Register</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" > Logout</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="WindowGallery.html"> Gallery </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="service.html">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact Us or Get Service</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="booking.html">My Profile</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        </div>
        
        
)
}



// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function HeaderArea() {
//   const [isGalleryOpen, setIsGalleryOpen] = useState(false);

//   return (
//     <div className="hero_area">
//       <header className="header_section">
//         <div className="header_top">
//           <div className="container-fluid">
//             <div className="contact_nav">
//               <a href="">
//                 <i className="fa fa-phone" aria-hidden="true"></i>
//                 <span> Call : +357 96 032003 </span>
//               </a>
//               <a href="">
//                 <i className="fa fa-envelope" aria-hidden="true"></i>
//                 <span> Email : demo@gmail.com </span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="header_bottom">
//           <div className="container-fluid">
//             <nav className="navbar navbar-expand-lg custom_nav-container">
//               <a className="navbar-brand" href="#">
//                 <span>
//                   <img
//                     src="images/logo.jpg"
//                     alt="Logo"
//                     style={{ width: "60px", height: "40px", marginRight: "8px" }}
//                   />
//                   Correct Cleaning
//                 </span>
//               </a>

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
//                     <Link className="nav-link" to="/login">Login</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/register">Register</Link>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link">Logout</a>
//                   </li>

//                   {/* Падащо меню за Gallery */}
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       onClick={() => setIsGalleryOpen(!isGalleryOpen)}
//                     >
//                       Gallery ▼
//                     </a>
//                     {isGalleryOpen && (
//                       <ul className="dropdown-menu">
//                         <li><Link className="dropdown-item" to="/gallery/window">Window Gallery</Link></li>
//                         <li><Link className="dropdown-item" to="/gallery/patio">Patio Gallery</Link></li>
//                         <li><Link className="dropdown-item" to="/gallery/furniture">Furniture Gallery</Link></li>
//                       </ul>
//                     )}
//                   </li>

//                   <li className="nav-item">
//                     <Link className="nav-link" to="/services">Services</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/contact">Contact Us or Get Service</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/profile">My Profile</Link>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
