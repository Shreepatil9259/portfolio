import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            Shreyas Patil<span></span>
            <p className="footer-subtitle fade-in visible">DevOps Engineer</p>
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Shreyas Patil. All rights reserved.
          </p>
        </div>
        
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
