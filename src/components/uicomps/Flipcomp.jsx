import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../stylesheets/Project.css'
import { IoLogoGithub } from 'react-icons/io';
import { IoIosGlobe } from 'react-icons/io';


// =--------------
const Flipcomp = ({project}) => {
    return (
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    style={{ width: '250px', height: '250px',margin:"2rem" }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
        //   filter:" grayscale(50%)"
      }}
    >
   
    </FrontSide>
    <BackSide
      style={{ backgroundColor: 'rgba(0, 0, 0,0.900)'}}>
          <div className="mainbackpart">
      <div className="backhead"><h2>{project.title}</h2>
      </div>
    <div className="description"><p>{project.description}</p></div>
      <div className="links"><a href={project.git}><IoLogoGithub/>Git Link</a>    <a href={project.deploy}><IoIosGlobe/>Deploy Link</a></div>
      </div>
    </BackSide>
  </Flippy>
    )
}

export default Flipcomp
