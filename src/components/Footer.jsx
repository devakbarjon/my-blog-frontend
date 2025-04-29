// src/components/Footer.jsx
import React from 'react';
import { socialLinks } from '../config/socialLinks';

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <p className="mb-0">
          Copyright {new Date().getFullYear()}
          &copy; <a href="http://www.devakbar.blog">Akbar</a>
        </p>
        <div className="social-links text-right m-auto ml-sm-auto">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              className="link" 
              href={link.url}
              aria-label={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;