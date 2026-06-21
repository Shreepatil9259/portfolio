import { GraduationCap, BookOpen, School } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      type: 'university',
      icon: <GraduationCap size={24} />,
      title: "Bachelor's Degree in Computer Science",
      institution: "Sanjay Ghodawat University, Kolhapur",
      period: "2022 - 2026",
      description: "Focused on advanced computing, systems architecture, and software engineering. Graduated with honors.",
      grade: "CGPA: 7.80 (out of 10)"
    },
    {
      id: 2,
      type: 'college',
      icon: <BookOpen size={24} />,
      title: "Higher Secondary Certificate (HSC) – Science",
      institution: "Shri. P. B. Patil College, Mudhal,Kolhapur",
      period: "2020 - 2022",
      description: "Completed with a focus on science and mathematics, building a strong foundation for computing.",
      grade: "Marks: 71.83%"
    },
    {
      id: 3,
      type: 'school',
      icon: <School size={24} />,
      title: "Secondary School Certificate (SSC)",
      institution: "Shri. K. M. College, Kolhapur",
      period: "2019-20",
      description: "Developed early interest in technology and problem-solving.",
      grade: "Marks: 92.60%"
    }
  ];

  return (
    <section id="education" className="education-section section bg-alt">
      <div className="container">
        <h2 className="section-title fade-in visible">Education Journey</h2>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item fade-in visible`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-icon">
                {item.icon}
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <p>{item.description}</p>
                {item.grade && <p style={{ fontWeight: '600', color: 'var(--accent-color)', marginTop: '0.5rem' }}>{item.grade}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
