import React from "react";
import "../index.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Services</h3>
          <a href="#">Medical Billing</a>
          <a href="#">Medical Coding</a>
          <a href="#">RCM</a>
          <a href="#">Credentialing</a>
          <a href="#">Front Office Management</a>
          <a href="#">MIS Reporting</a>
        </div>

        <div className="footer-column">
          <h3>Specialties</h3>
          <a href="#">Cardiology</a>
          <a href="#">Neurology</a>
          <a href="#">Oncology</a>
          <a href="#">Gastroenterology</a>
          <a href="#">Pulmonology</a>
          <a href="#">Behavioral Health</a>
        </div>

        <div className="footer-column">
          <h3>Areas</h3>
          <a href="#">Emergency Centers</a>
          <a href="#">Surgery Centers</a>
          <a href="#">Radiology Clinics</a>
          <a href="#">Primary Care Physicians</a>
          <a href="#">Private Practices</a>
        </div>

        <div className="footer-column">
          <h3>About</h3>
          <a href="#">Our Culture</a>
          <a href="#">Our Team</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQs</a>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <a href="#">Blogs</a>
          <a href="#">Why Avernus</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-column contact-info">
          <h3>Contact</h3>
          <p><FaPhoneAlt /> +1 817-989-6949</p>
          <p><FaEnvelope /> info@avernuscorp.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Avernus Management Consulting LLC. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
