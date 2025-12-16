import './Footer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Footer() {

  const [footerContent, setFooterContent] = useState();

  useEffect(() => {
    setInterval(() => {

      if (localStorage.getItem("role") === "user") {
        // USER FOOTER
        setFooterContent(
          <>
           <div className="hs-bottom-bar">
          <p>© 2025 HappySoul | Made with 💚 for mental wellness</p>
          <div className="hs-social">
            <i className="bi-twitter"></i>
            <i className="bi-facebook"></i>
            <i className="bi-instagram"></i>
            <i className="bi-linkedin"></i>
            <i className="bi-youtube"></i>
          </div>
        </div>
          </>
        );
      }

      else if (localStorage.getItem("role") === "admin") {
        // ADMIN FOOTER
        setFooterContent(
          <>
            <div className="hs-bottom-bar">
          <p>© 2025 HappySoul | Made with 💚 for mental wellness</p>
          <div className="hs-social">
            <i className="bi-twitter"></i>
            <i className="bi-facebook"></i>
            <i className="bi-instagram"></i>
            <i className="bi-linkedin"></i>
            <i className="bi-youtube"></i>
          </div>
        </div>
          </>
        );
      }

      else {
        // PUBLIC FOOTER (Landing Page)
        setFooterContent(
          <>
            <footer className="hs-footer">
        <div className="hs-container">
          <div className="hs-footer-section">
            <img src="/assets/logoM.jpg" className="hs-footer-logo" alt="HappySoul" />
            <h2 className="hs-brand">HappySoul</h2>
            <p>Your mental wellness companion 🌿</p>
          </div>

          <div className="hs-footer-section">
            <h3>Quick Links</h3>
            <div className="hs-links-grid">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/activities">Activities</Link></li>
              </ul>
              <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </ul>
            </div>
          </div>

          <div className="hs-footer-section">
            <h3>Contact Info</h3>
            <p><i className="bi-telephone"></i> 9876543210</p>
            <p><i className="bi-envelope"></i> happysoul@gmail.com</p>
            <p><i className="bi-geo-alt"></i> IPS Academy, Indore</p>

           
          </div>
        </div>

        <div className="hs-bottom-bar">
          <p>© 2025 HappySoul | Made with 💚 for mental wellness</p>
          <div className="hs-social">
            <i className="bi-twitter"></i>
            <i className="bi-facebook"></i>
            <i className="bi-instagram"></i>
            <i className="bi-linkedin"></i>
            <i className="bi-youtube"></i>
          </div>
        </div>
      </footer>
          </>
        );
      }

    }, 1);
  }, []);

  return <>{footerContent}</>;
}

export default Footer;
