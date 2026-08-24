import React, { useEffect, useRef, useState } from "react";
import Skills from "../Data/skill.js";
import "../../CSS/skills.css";

const TechnicalSkills = () => {
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
    <div className="skills" ref={ref}>
      <div className="skills-container">
        <div className="section-label">Technical Expertise</div>
        <h2 className="skills-heading">Skills & Tools I Build With</h2>
        <div className="skills-grid">
          {Skills.categories.map((cat, i) => (
            <div
              key={i}
              className={`skill-category ${visible ? "reveal" : ""}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <h3 className="skill-cat-label">{cat.label}</h3>
              <div className="skill-items">
                {cat.items.map((item, j) => (
                  <div key={j} className="skill-item">
                    <div className="skill-item-header">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-level">{item.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: visible ? `${item.level}%` : "0%",
                          transitionDelay: `${i * 0.12 + j * 0.05}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
