import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section bg-alt">
      <div className="container">
        <h2 className="section-title fade-in visible">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info fade-in visible">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>shreepatil9259@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8767953427</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Kolhapur, Maharashtra</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/Shreepatil9259" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shreyas-patil-1b66a125b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/shreerajepatil?s=11" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="contact-form-container fade-in visible" style={{ transitionDelay: '0.2s' }}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="3" placeholder="Your Message" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
