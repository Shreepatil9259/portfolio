import { Briefcase, Download } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section section bg-alt">
      <div className="container">
        <h2 className="section-title fade-in visible">My Experience</h2>
        
        <div className="experience-card fade-in visible">
          <div className="experience-header">
            <div className="experience-icon-wrapper">
              <Briefcase size={32} />
            </div>
            <div className="experience-title-container">
              <h3>Internship</h3>
              <h4>5 Months Internship</h4>
            </div>
          </div>
          
          <div className="experience-content">
            <p>
              Successfully completed a 5-month internship as a Web Developer Intern, gaining hands-on experience and developing practical skills in a professional environment.
            </p>
            
            <a 
              href="/ShreyasPatil-InternshipCompletionLetter.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary download-btn"
            >
              <Download size={20} />
              View Completion Letter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
