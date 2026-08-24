import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ scrollToSection, homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", ref: homeRef },
    { label: "About", ref: aboutRef },
    { label: "Skills", ref: skillsRef },
    { label: "Work", ref: projectsRef },
    { label: "Contact", ref: contactRef },
  ];

  const handleClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        <span className="nav-logo" onClick={() => handleClick(homeRef)}>
          AN<span className="nav-accent">.</span>
        </span>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon className="icon" /> : <MenuIcon className="icon" />}
        </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleClick(item.ref)}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {item.label}
            </li>
          ))}
          <li className="nav-cta" onClick={() => handleClick(contactRef)}>
            Hire Me
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
