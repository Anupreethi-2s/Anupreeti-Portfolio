import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../../CSS/about.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-left">
        <div id="pic">

        </div>
        <h1>Anupreethi Nallavelli</h1>
        <p>Full Stack Developer</p>
        <hr />
        <aside>
          <div className="info">
            <div className="icon">
              <EmailIcon></EmailIcon>
            </div>
            <div className="sub-info">
              <p className="up">Email</p>
              <p className="down">nallavellianupreethi@gmail.com</p>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <LocalPhoneIcon></LocalPhoneIcon>
            </div>
            <div className="sub-info">
              <p className="up">Mobile</p>
              <p className="down">+91 8897851977</p>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <LinkedInIcon></LinkedInIcon>
            </div>
            <div className="sub-info">
              <p className="up">LinkedIn</p>
              <p className="down">https://www.linkedin.com/in/anupreethi-nallavelli/</p>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <LocationOnIcon></LocationOnIcon>
            </div>
            <div className="sub-info">
              <p className="up">Location</p>
              <p className="down">Hyderabad</p>
            </div>
          </div>
        </aside>
      </section>
      <section className="about-right">
        <h1>About Me :</h1>
        <p>
          Hi, I am Anupreethi Nallavelli, and I am from Peddapalli, Karimnagar District,
          currently residing in Hyderabad. I hold a Bachelor's degree in
          Electrical and Electronics Engineering. After graduation,  I took the
           initiative to enhance my technical skills by learning Python and SQL on my own,
            and I gained hands-on experience with JavaScript during my internship at Hornbill Technologies.
             I am a
          disciplined, self-motivated, and goal-oriented person, always striving
          for continuous learning and improvement. My hobbies include listening
          to music, Dancing and Playing Puzzles, which reflect my creative side.
        </p>
        <h3>Education :</h3>
        <article>
            <div className="education">
                <h3>KU College of Engineering and Technology</h3>
                <p>2020-2024</p>
                <p>Electrical and Electronics Engineering</p>
                <p>cgpa : 8.6</p>
            </div>
            <div className="education">
                <h3>NRI Junior College</h3>
                <p>2018-2020</p>
                <p>Intermediate</p>
                <p>cgpa : 9.7</p>
            </div>
            <div className="education">
                <h3>Shantiniketan High School</h3>
                <p>2017-2018</p>
                <p>SSC</p>
                <p>cgpa : 9.2</p>
            </div>
        </article>
      </section>
    </div>
  );
};

export default About;
