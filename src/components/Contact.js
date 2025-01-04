import React from "react";
import "../App.css";
import { FaLinkedin, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="social-links">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/banksray"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/raysukulele"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/banksfamilytravels"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rayhbanks/Ray-Banks-Portfolio"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

     {/* Footer Message */}
     <p className="footer-message">
        Made with ♥ by Ray Banks
      </p>
    </section>
  );
};

export default Contact;