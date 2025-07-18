import React from "react";
import Bio from "../Data/data.js";
import { ReactTyped } from "react-typed";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../CSS/home.css'

const Home = () => {

  const openSocial = (value) => {
    const a = value;
    if(a === "resume"){
      // https://drive.google.com/file/d/1RvG_VyggbxqfGFOB1zAJhdhGetb1lrIC/view?usp=drivesdk
      // window.open("https://drive.google.com/file/d/1lDeB8V4Ap8zz1ZnfX4NvlK4M_uQ0x4Dt/view?usp=drive_link", "_blank");
    } else if(a === "linkedin"){
      window.open("https://www.linkedin.com/in/anupreethi-nallavelli/", "_blank");
    // } else if(a === "github"){
    //   window.open("https://github.com/Anupreethi-2s", "_blank");
    }
    
  }

  return (
    <div className="home">
      <article>
        <div className="profile_pic"></div>
      </article>
      <div className="intro">
        <h1>{Bio.fullName}</h1>
        <h3>
          And I'm
          <span>
            <ReactTyped
              strings={Bio.roles}
              typeSpeed={80} // Speed of typing
              backSpeed={40} // Speed of deleting
              loop
            />
          </span>
        </h3>
        <p>
          Aspiring Software Engineer with a bachelor’s degree in Electrical and
          Electronics Engineering, seeking a challenging position in a reputable 
          organization to apply and expand my technical skills. Passionate about 
          continuous learning, innovation, and contributing to team success through
           hard work and adaptability.
        </p>
        <aside>
          <button onClick={() => {openSocial("resume")}}>Resume</button>
          <span onClick={() => {openSocial("linkedin")}}>
            <LinkedInIcon></LinkedInIcon>
          </span>
          {/* <span onClick={() => {openSocial("github")}}>
            <GitHubIcon></GitHubIcon>
          </span> */}
        </aside>
      </div>
    </div>
  );
};

export default Home;
