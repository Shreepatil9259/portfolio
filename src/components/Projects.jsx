import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Personal AI Finance Tracker",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80",
      description: "Finance tracker built in collaboration with a team to help users manage their finances. Built the frontend using React + Vite and integrated REST APIs for communication between application components..",
      tags: ["JS", "React", "Python"],
      liveLink: "#",
      githubLink: "https://github.com/Nerli-Ishan-25/FinWise-Complete-v2-mark-2"
    },
    {
      title: "Containerized Microservices",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=600&q=80",
      description: "Deployed a suite of internal tools using Docker and Kubernetes, resulting in a 40% reduction in resource overhead.",
      tags: ["Docker", "Kubernetes", "RedHat"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Construction Website",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      description: "A Python-based backend that aggregates server logs and a React frontend to visualize system health in real-time.",
      tags: ["HTML", "CSS", "JSS"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title fade-in visible">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card fade-in visible"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink size={24} /> 
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
