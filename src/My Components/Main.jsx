import React, { useRef } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About'
import TechnicalSkills from './Skills/TechnicalSkills'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}></Navbar>
        <section ref={homeRef}><Home></Home></section>
        <section ref={aboutRef}><About></About></section>
        <section ref={skillsRef}><TechnicalSkills></TechnicalSkills></section>
        <section ref={projectsRef}><Projects></Projects></section>
        <section ref={contactRef}><ContactMe></ContactMe></section>
    </>
  )
}

export default Main