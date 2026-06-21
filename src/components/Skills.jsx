import { Terminal, Server, Code, Layout } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Technical Skills",
      items: [
        { name: "Linux Administration", level: 95 },
        { name: "Podman Containerization", level: 90 },
        { name: "Cloud Concepts", level: 85 },
        { name: "Python Programming", level: 80 },
        { name: "Frontend Basics (HTML, CSS, React)", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <h2 className="section-title fade-in visible">Skills & Expertise</h2>
        
        <div className="skills-content">
          <div className="skills-bars">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group fade-in visible" style={{ transitionDelay: `${index * 0.2}s` }}>
                <h3 className="skill-category">{skillGroup.category}</h3>
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="skills-cards fade-in visible" style={{ transitionDelay: '0.4s' }}>
            <div className="skill-card tilt-card">
              <Terminal size={32} className="card-icon" />
              <h4>Linux Systems</h4>
              <p>Expert in RedHat enterprise Linux, server administration, and shell scripting.</p>
            </div>
            <div className="skill-card tilt-card">
              <Server size={32} className="card-icon" />
              <h4>Cloud & Containers</h4>
              <p>Proficient with Docker, Kubernetes, and modern cloud deployment strategies.</p>
            </div>
            <div className="skill-card tilt-card">
              <Code size={32} className="card-icon" />
              <h4>Python Development</h4>
              <p>Building automation scripts, backend APIs, and internal tooling.</p>
            </div>
            <div className="skill-card tilt-card">
              <Layout size={32} className="card-icon" />
              <h4>Frontend Basics</h4>
              <p>Crafting interactive user interfaces with React, HTML, and CSS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
