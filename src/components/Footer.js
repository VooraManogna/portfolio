import React from "react";
import "./Footer.css";
import { BsLinkedin, BsGithub} from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <BsLinkedin size={30} className="social-icon"/>
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <BsGithub size={30} className="social-icon"/>
        </a>
      </div>
      <p>&copy; 2025 Manogna Voora. All Rights Reserved.</p>
      <p className="thank-you"> Thank you for visiting my portfolio!</p>
    </footer>
  );
}

export default Footer;