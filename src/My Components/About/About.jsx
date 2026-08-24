import React, { useEffect, useRef, useState } from "react";
import Bio from "../Data/data.js";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";
import "../../CSS/about.css";

const About = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="about" ref={ref}>
      <div className={`about-left ${visible ? "reveal" : ""}`}>
        <div className="about-card">
          <div className="about-avatar">
            <span className="avatar-initials">AN</span>
          </div>
          <h2 className="about-name">{Bio.fullName}</h2>
          <p className="about-role">{Bio.title}</p>
          <p className="about-location">📍 {Bio.location}</p>
          <div className="about-contacts">
            <div className="contact-row" onClick={() => window.open(`mailto:${Bio.email}`)}>
              <EmailIcon className="contact-icon" />
              <span>{Bio.email}</span>
            </div>
            <div className="contact-row">
              <LocalPhoneIcon className="contact-icon" />
              <span>{Bio.phone}</span>
            </div>
            <div className="contact-row" onClick={() => window.open(Bio.linkedin, "_blank")}>
              <LinkedInIcon className="contact-icon" />
              <span>LinkedIn Profile</span>
            </div>
          </div>
          <div className="about-languages">
            <p className="lang-label">Languages</p>
            <div className="lang-chips">
              {Bio.languages.map((lang, i) => (
                <span key={i} className="lang-chip">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`about-right ${visible ? "reveal" : ""}`}>
        <div className="section-label">About Me</div>
        <h2 className="about-heading">Building fast, polished, production-grade UI</h2>
        {Bio.about.map((para, i) => (
          <p key={i} className="about-para">{para}</p>
        ))}

        <div className="experience-block">
          <div className="exp-header">
            <WorkIcon className="exp-icon" />
            <h3 className="exp-title">{Bio.experience.role}</h3>
          </div>
          <p className="exp-company">
            {Bio.experience.company} · {Bio.experience.location}
          </p>
          <p className="exp-duration">{Bio.experience.duration}</p>
          <ul className="exp-highlights">
            {Bio.experience.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <h3 className="edu-heading">Education</h3>
        <div className="timeline">
          {Bio.education.map((edu, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p className="timeline-period">{edu.period}</p>
                <h4 className="timeline-institution">{edu.institution}</h4>
                <p className="timeline-degree">{edu.degree}</p>
                <p className="timeline-score">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
