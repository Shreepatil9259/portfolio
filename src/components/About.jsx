import './About.css';
import profileImage from '../assets/IMG_5235.PNG';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title fade-in visible">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-wrapper fade-in visible">
            {/* The user will place their image here */}
            <div className="about-image-placeholder">
              <img 
                src={profileImage}   
                alt="Shree" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x500?text=Your+Image+Here";
                  
                }}
              />
            </div>
          
          </div>
          
          <div className="about-text fade-in visible" style={{ transitionDelay: '0.2s' }}>
            <h3>I'm a System Administrator & Developer based in India</h3>
            <p>
              I'm a Computer Engineering student at Sanjay Ghodawat University, Kolhapur, passionate about building innovative software solutions and exploring cutting-edge technologies.
            </p>
            <p>
              I specialize in bridging the gap between infrastructure and application development. 
              As a Linux RHCSA Certified professional with expertise in Cloud Concepts, I ensure 
              systems run smoothly, securely, and scale efficiently.
            </p>
            <p>
              My journey doesn't stop at the server. With RedHat Certification DO188 as a Container 
              Specialist, I embrace modern DevOps practices. Alongside my infrastructure skills, I 
              code in Python and possess basic Frontend knowledge, allowing me to build robust internal 
              tools and automation scripts that empower teams.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
