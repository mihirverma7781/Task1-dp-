import React from 'react'
import '../stylesheets/Navbar.css'
import logo from '../logos/onlinelogomaker-091520-2006-4547.svg'
import { NavLink } from 'react-router-dom'
const Navbar=()=> {
    return (
        <>
{/* navbar starts here */}
<div className="container-fluid nav_bg">
    <div className='row'>
    <div className='col-10  mx-auto'>
   
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#home"><img src={logo}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

 


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    
      <li className="nav-item">
        <a className="nav-link nav-btn home" href="#home"  >Home</a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link nav-btn home" href="#about"  >About</a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link nav-btn home" href="#skills"  >Skills</a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link nav-btn home" href="#projects"  >Projects</a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link nav-btn home" href="#contact"  >Contact</a>
      </li>

    </ul>

  </div>
</nav>


</div>
    </div>
</div>
{/* navbar ends here */}
        </>
    )
}

export default Navbar
