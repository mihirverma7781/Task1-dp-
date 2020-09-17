import React from 'react'
import skilldata from '../json/Skills.json'
import Skillbar from '../uicomps/Skillbar'
import lines from "../images/lines.svg";
import '../stylesheets/Skills.css'

const Skills = () => {
    return (
        <div className="skillscomp" id="skills" >
              <div className="Skill-header">
        <h1>MY SKILLS</h1>
          <img src={lines} alt="image not found" />
  
      </div>    
      <div className="json-comp">
            {
                skilldata.map((skill)=>(
                    <Skillbar key={skill.id} item={skill}/>
                ))}
                </div>
        </div>
    )
}

export default Skills
