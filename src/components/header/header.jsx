
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../components/context/authContext/authCont";


export default function HeaderArea() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="contact_nav">
              <Link to="/serviceSection">
                <img src="/images/logo1.png" alt="no image" />
              </Link>
              {/* <Link to={user ? "/MyProfile" : "/login"}>
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>
                  {user ? `Welcome, ${user.get("username")}` : "Guest"}
                </span>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              {/* <Link className="navbar-brand" to="/">Correct Cleaning</Link> */}
              <Link to={user ? "/MyProfile" : "/login"}>
                <i className="fa fa-user user-fa" aria-hidden="true"></i>
                <span>
                  {user ? `Welcome, ${user.get("username")}` : "Guest"}
                </span>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <span className=""> </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/serviceSection">Services</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>

                  {user ? (
                    <>
                      <li className="nav-item"><Link className="nav-link" to="/MyProfile">My Profile</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/CreateImg">Add Image</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/CreateComment">Add Comment</Link></li>
                      <li className="nav-item">
                        <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
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
