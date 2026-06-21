import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Microsoft Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      credlyUrl: "https://www.credly.com/badges/88e2e9c2-58c2-4d7e-8bbb-6042a6ac193b/public_url",
      date: "March 2024",
      badgeImage: "../public/Microsoftbadge.png" 
    },
    {
      id: 2,
      title: "Red Hat Rapid Course",
      issuer: "Red Hat",
      credlyUrl: "https://www.credly.com/badges/f74fa448-f604-44e7-85f4-25fc0b4ca2a8/public_url",
      date: "June 2025",
      badgeImage: "../public/RHCSA_Rapid_Track_Coursebadge.png"
    },
    {
      id: 3,
      title: "Red Hat Certified System Administration (RHCSA)",
      issuer: "Red Hat",
      credlyUrl: "https://www.credly.com/badges/66fb90db-e06e-4aec-8bf1-62efe422dfcf/public_url",
      date: "January 2026",
      badgeImage: "../public/RHCSAbadge.png"
    },
    {
      id: 4,
      title: "Red Hat Container Specialist / Certified Developer in Cloud-native Applications",
      issuer: "Red Hat",
      credlyUrl: "https://www.credly.com/badges/e1d31c29-718c-40e2-b294-46f03c25c973/public_url",
      date: "June 2026",
      badgeImage: "../public/containerbadge.png"
    },
    {
      id: 5,
      title: "Red Hat OpenShift Development I: Introduction to Containers with Podman (DO188) - Ver. 4.18",
      issuer: "Red Hat",
      credlyUrl: "https://www.credly.com/badges/b16df926-2131-481f-83e7-7b448b964b8e/public_url",
      date: "March 2026",
      badgeImage: "../public/openshifttrackcourcebadge.png"
    },
    {
      id: 6,
      title: "NPTEL Data Analytics with Python",
      issuer: "NPTEL",
      credlyUrl: "https://www.linkedin.com/posts/shreyas-patil-1b66a125b_nptel-activity-7427321172826005505--k54?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_-6doBvrAeMJAZlrd67MfTvVoyg6WQlHo", // Replace with actual LinkedIn URL
      platform: "LinkedIn",
      date: "April 2025",
      badgeImage: "../public/IMG_1777.PNG"
    }
  ];

  return (
    <section id="certifications" className="certifications-section section">
      <div className="container">
        <h2 className="section-title fade-in visible">Certifications</h2>
        
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <a 
              key={cert.id} 
              href={cert.credlyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cert-card fade-in visible"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`cert-icon-wrapper ${cert.badgeImage ? 'has-image' : ''}`}>
                {cert.badgeImage ? (
                  <img src={cert.badgeImage} alt={`${cert.title} badge`} className="cert-badge-image" />
                ) : (
                  <Award size={48} />
                )}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">
                {cert.issuer} • <span className="cert-date">{cert.date}</span>
              </div>
              
              <div className="credly-btn">
                View on {cert.platform || "Credly"} <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
