import React from 'react'
import projects from '../Data/projects'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../../CSS/projects.css'

const Projects = () => {

  const openGitHubLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className='projects'>
        <div className='sub_projects'>
            <h1>Projects</h1>
            <div className='my_projects'>
              {projects.projects.map((project) => {
                return(
                  <div className='project'>
                    <div className="projecticon">
                        <img src={project.image} alt="" />
                    </div>
                    <h2>{project.project}</h2>
                    <span onClick={() => openGitHubLink(project.githubLink)}>
                      <OpenInNewIcon className='icon'></OpenInNewIcon>
                    </span>
                    <h1>View on GitHub</h1>
                    <p>Technologies : {project.technolohies}</p>
                  </div>
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default Projects