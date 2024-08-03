import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>De-Mentor</h3>
        <p>
          <a href="/terms-of-use" className="footer-link">Terms of Use</a> | 
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
