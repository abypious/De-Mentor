import React from 'react';
import './csss/Footer.css'; 

const FooterL = () => {
  return (
    <footer className="new_footer_area">
      <div className="new_footer_top">
        <div className="col-lg-6 col-md-6">
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="mb-0 f_400">© De-Mentor, 2024 All rights reserved.</p>
        <div className="footer-buttons wow fadeInLeft">
                <a href="/TeamL" className="footer-button">Meet Our Team</a>
                <a href="/contact" className="footer-button">Contact Us</a>
              </div>
      </div>
    </footer>
  );
};

export default FooterL;
