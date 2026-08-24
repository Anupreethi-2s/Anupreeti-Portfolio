import React, { useEffect, useRef, useState } from "react";
import Bio from "../Data/data.js";
import { ReactTyped } from "react-typed";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import profilePic from "../Home/Assets/profile.jpg";
import "../../CSS/home.css";

const Home = ({ scrollToSection, projectsRef, contactRef }) => {
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const openSocial = (url) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="home" ref={heroRef}>
      {/* Animated background orbs */}
      <div className="hero-orb-bg hero-orb-bg-1"></div>
      <div className="hero-orb-bg hero-orb-bg-2"></div>
      <div className="hero-orb-bg hero-orb-bg-3"></div>

      <div className={`hero-content ${visible ? "reveal" : ""}`}>
        <div className="hero-badge">
          <span className="status-dot"></span>
          Available for opportunities
        </div>
        <h1 className="hero-name">{Bio.fullName}</h1>
        <div className="hero-typed">
          <span className="hero-prefix">I'm a </span>
          <ReactTyped
            strings={Bio.roles}
            typeSpeed={70}
            backSpeed={40}
            loop
            className="hero-typed-text"
          />
        </div>
        <p className="hero-tagline">{Bio.tagline}</p>
        <div className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => scrollToSection(projectsRef)}
          >
            See My Work <ArrowForwardIcon className="btn-icon" />
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollToSection(contactRef)}
          >
            Hire Me
          </button>
        </div>
        <div className="hero-socials">
          <span className="hero-social" onClick={() => openSocial(Bio.linkedin)}>
            <LinkedInIcon />
          </span>
          <span className="hero-social" onClick={() => openSocial(Bio.github)}>
            <GitHubIcon />
          </span>
        </div>
      </div>

      <div className={`hero-visual ${visible ? "reveal" : ""}`}>
        <div className="hero-profile">
          <div className="hero-profile-ring"></div>
          <div className="hero-profile-inner">
            {imgError ? (
              <div className="hero-profile-placeholder">AN</div>
            ) : (
              <img
                src={profilePic}
                alt="Anupreethi Nallavelli"
                className="hero-profile-img"
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </div>
        <div className="hero-floating-card card-1">
          <span className="card-emoji">⚛️</span>
          <span className="card-label">React.js</span>
        </div>
        <div className="hero-floating-card card-2">
          <span className="card-emoji">☁️</span>
          <span className="card-label">AWS</span>
        </div>
        <div className="hero-floating-card card-3">
          <span className="card-emoji">🚀</span>
          <span className="card-label">Node.js</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
