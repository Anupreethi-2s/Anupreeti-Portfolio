import React, { useState, useEffect, useRef } from "react";
import projects from "../Data/projects";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeIcon from "@mui/icons-material/Code";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../../CSS/projects.css";

const Projects = () => {
  const [expanded, setExpanded] = useState(null);
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

  const toggleExpand = (i) => setExpanded(expanded === i ? null : i);
  const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="projects" ref={ref}>
      <div className="projects-container">
        <div className="section-label">Selected Work</div>
        <h2 className="projects-heading">Case Studies & Projects</h2>
        <div className="projects-list">
          {projects.projects.map((project, i) => (
            <div
              key={i}
              className={`case-card ${visible ? "reveal" : ""} ${
                expanded === i ? "expanded" : ""
              } ${project.featured ? "featured" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Header row — always visible */}
              <div className="case-header" onClick={() => toggleExpand(i)}>
                <div className="case-header-left">
                  <span className="case-number">0{i + 1}</span>
                  <div>
                    <h3 className="case-title">{project.title}</h3>
                    <span className="case-category">{project.category}</span>
                  </div>
                </div>
                <div className="case-header-right">
                  <div className="case-stack-preview">
                    {project.stack.slice(0, 3).map((tech, j) => (
                      <span key={j} className="stack-chip">{tech}</span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="stack-chip more">+{project.stack.length - 3}</span>
                    )}
                  </div>
                  <ArrowDropDownIcon className={`expand-icon ${expanded === i ? "rotated" : ""}`} />
                </div>
              </div>

              {/* Expandable body */}
              <div className={`case-body ${expanded === i ? "show" : ""}`}>
                <div className="case-body-inner">
                  {/* Top row: Problem + Role side by side */}
                  <div className="case-row">
                    <div className="case-block">
                      <span className="case-block-icon">🎯</span>
                      <h4 className="case-label">The Problem</h4>
                      <p className="case-text">{project.problem}</p>
                    </div>
                    <div className="case-block">
                      <span className="case-block-icon">👤</span>
                      <h4 className="case-label">My Role</h4>
                      <p className="case-text">{project.role}</p>
                    </div>
                  </div>

                  {/* Full width: What I Built */}
                  <div className="case-block full">
                    <span className="case-block-icon">⚙️</span>
                    <h4 className="case-label">What I Built</h4>
                    <p className="case-text">{project.description}</p>
                  </div>

                  {/* Tech stack — horizontal chips */}
                  <div className="case-block full">
                    <span className="case-block-icon">🛠️</span>
                    <h4 className="case-label">Tech Stack</h4>
                    <div className="case-stack-full">
                      {project.stack.map((tech, j) => (
                        <span key={j} className="stack-chip">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome — highlighted box */}
                  <div className="case-outcome">
                    <span className="case-block-icon">📈</span>
                    <div>
                      <h4 className="case-label">Outcome</h4>
                      <p className="case-outcome-text">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Links */}
                  {(project.githubLink || project.liveLink) && (
                    <div className="case-links">
                      {project.githubLink && (
                        <button className="case-link-btn" onClick={() => openLink(project.githubLink)}>
                          <CodeIcon className="link-icon" /> View Code
                        </button>
                      )}
                      {project.liveLink && (
                        <button className="case-link-btn" onClick={() => openLink(project.liveLink)}>
                          <OpenInNewIcon className="link-icon" /> Live Demo
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
