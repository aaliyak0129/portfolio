import React from "react";
import { FaGithub, FaLinkedin,FaInstagram  } from "react-icons/fa"; // icons use karne ke liye

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="brand">AALIYA KHAN</span> • Where Code Meets Creativity💻🎨
        </p>
        <div className="socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
               <a href="https://instagram.com/01_aaliya_29" target="_blank" rel="noreferrer" className="social-link">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
