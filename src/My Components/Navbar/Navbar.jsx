import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ scrollToSection, homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <div className='navbar'>
            <span>
                <h1 onClick={() => scrollToSection(homeRef)}>MY PORTFOLIO</h1>
            </span>
            <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
              <MenuIcon className='icon'></MenuIcon>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li onClick={() =>   scrollToSection(homeRef)}>Home</li>
                <li onClick={() => scrollToSection(aboutRef)}>About</li>
                <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
                <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
                <li onClick={() => scrollToSection(contactRef)}>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar