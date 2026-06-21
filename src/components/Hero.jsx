import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profilePic from '../assets/developer-avatar.png';
import './Hero.css';

const Hero = () => {
  const roles = [
    "Computer Science Student",
    "Linux Infrastructure Engineer",
    "Developer",
    "Vibe Engineer",
    "Aspiring DevOps Engineer"
  ];
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setText(roles[roleIndex]);
    const timeout = setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Wait 2.5 seconds before showing the next role
    return () => clearTimeout(timeout);
  }, [roleIndex]);

  return (
    <section id="home" className="hero-section section">
      <div className="hero-container container">
        <div className="hero-content">
          <h3 className="hero-subtitle fade-in visible">Available for opportunities! Let's connect</h3>
          <h1 className="hero-title fade-in visible" style={{ transitionDelay: '0.2s' }}>
            Hi, I'm <span className="highlight">Shreyas Patil</span>
          </h1>
          <h3 className="hero-typing fade-in visible" style={{ transitionDelay: '0.4s' }}>
            {text}<span className="cursor">|</span>
          </h3>
          <p className="hero-description fade-in visible" style={{ transitionDelay: '0.6s' }}>
            Passionate about Linux, Cloud Concepts, and building reliable infrastructure. 
            RHCSA & DO188 Certified professional with a knack for frontend development.
          </p>
          <div className="hero-cta fade-in visible" style={{ transitionDelay: '0.8s' }}>
            <a href="#contact" className="btn btn-primary">
              Get in Touch <ArrowRight size={20} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </a>
            {/*<a href="/resume.pdf" download className="btn btn-outline" style={{ marginLeft: '1rem' }}></a>*/}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginLeft: '1rem' }}>
              View Resume <Download size={20} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </a>
          </div>
        </div>
        <div className="hero-image-container fade-in visible" style={{ transitionDelay: '1s' }}>
          <div className="hero-image-blob"></div>
          <img 
            src={profilePic} 
            alt="3D Developer Avatar" 
            className="floating-avatar"
            style={{ 
              position: 'absolute', 
              width: '340px', 
              height: '340px',
              objectFit: 'cover',
              borderRadius: '50%',
              zIndex: 10,
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              border: '6px solid var(--card-bg)'
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
