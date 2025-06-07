import React from 'react';
import '../styles/index.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <p className="footer__text">© 2025 Uncleh25's Community Q&A Board</p>
      <nav>
        <ul className="footer__nav">
          <li><a href="/privacy" className="footer__link">Privacy Policy</a></li>
          <li><a href="/terms" className="footer__link">Terms of Service</a></li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;