import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Smartwatch Inc. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="icon"  style={{color:'#1877F2',fontSize:'24px'}}   ><FaFacebookF/></a>
          <a href="#" className="icon" style={{color:'#E4405F',fontSize:'24px'}} ><FaInstagram/></a>
          <a href="#" className="icon" style={{color:'#1DA1F2',fontSize:'24px'}}><FaTwitter/></a>
        </div>
      </div>
    </footer> 

  );
};

export default Footer;
