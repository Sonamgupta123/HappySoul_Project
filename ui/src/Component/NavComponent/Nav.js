import './Nav.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navContent, setNavContent] = useState();
  const [showDropdown, setShowDropdown] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Interval to check role and render navbar
    const intervalId = setInterval(() => {
      const role = localStorage.getItem("role");

      if (role === "user") {
        setNavContent(
          <>
            <nav className={`navbar navbar-expand-lg shadow-lg ${scrolled ? 'scrolled' : ''}`}>
              <div className="container">
                <a className="navbar-brand" href="#">
                  
                  <span>
                    HappySoul
                    <small>Find peace within</small>
                  </span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link to="/user" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/user-activities" className="nav-link">Activities</Link>
                    </li>
                   <li className="nav-item dropdown">
                   <a
                     className="nav-link dropdown-toggle"
                         href="#"
                        id="profileDropdown"
                           role="button"
                           data-bs-toggle="dropdown"
                             aria-expanded="false"
                      >
                           Profile
                                 </a>

                              <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                                 <li>
                                  <Link className="dropdown-item" to="/edit-profile">
                         
                                 Edit Profile
                                  </Link>
                                       </li>

                                          <li>
                                 <Link className="dropdown-item" to="/change-password">
                                      Change Password
                                         </Link>
                                           </li>
                                             </ul>                                          
                                              </li>

                    <li className="nav-item ms-3">
                      <Link to="/logout" className="nav-link custom-btn custom-border-btn btn">Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
        );
      }
     else if (role === "admin") {
  setNavContent(
    <>
     <nav className={`navbar navbar-expand-lg shadow-lg ${scrolled ? 'scrolled' : ''}`}>
  <div className="container">
    <a className="navbar-brand" href="#">
      <span>
        HappySoul Admin
        <small>Manage Platform</small>
      </span>
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
          <Link to="/admin" className="nav-link">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/mood-tracker" className="nav-link">Mood Tracker</Link>
        </li>

        <li className="nav-item">
          <Link to="/queries" className="nav-link">Queries</Link>
        </li>

        {/* ✅ PROFILE DROPDOWN */}
        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ cursor: "pointer" }}
          >
            Profile
          </span>

          <ul className="dropdown-menu dropdown-menu-end shadow">
            <li>
              <Link to="/admin-profile-edit" className="dropdown-item">
                Edit Profile
              </Link>
            </li>

            <li>
              <Link to="/admin-profile" className="dropdown-item">
                Change Password
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item ms-3">
          <Link to="/logout" className="nav-link custom-btn custom-border-btn btn">
            Logout
          </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

      else {
        // Public Navbar
        setNavContent(
          <>
            <nav className={`navbar navbar-expand-lg shadow-lg ${scrolled ? 'scrolled' : ''}`}>
              <div className="container">
                <a className="navbar-brand" href="#">
                  
                  <span>
                    HappySoul
                    <br/>
                    <small>Your mental wellness companion</small>
                  </span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">Home</Link>
                    </li>
                   
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/activities" className="nav-link">Activities</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link">Register</Link>
                    </li>

                    <li className="nav-item ms-3">
                      <Link to="/login" className="nav-link custom-btn custom-border-btn btn">Login</Link>
                    </li>
                     
                  </ul>
                </div>
              </div>
            </nav>
          </>
        );
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return <>{navContent}</>;
}

export default Navbar;
