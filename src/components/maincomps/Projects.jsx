import React from 'react'
import projects from '../json/Project.json'
import Flipcomp from '../uicomps/Flipcomp'
import lines from "../images/lines.svg";
const Projects = () => {
    return (
        <div className="projectcomp" id="projects" >
              <div className="Project-header">
        <h1>MY PROJECTS</h1>
          <img src={lines} alt="image not found" />
</div>

<div className="jflip-comp">
            {
                projects.map((project)=>(
                    <Flipcomp key={project.id} project={project}/>
                ))}
                </div>

          </div>
    )
}

export default Projects
