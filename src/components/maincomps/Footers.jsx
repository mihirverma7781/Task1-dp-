import React from 'react'
import '../stylesheets/Footer.css'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
const Footers = () => {
    return (
       <>
       <div className="footer">
           <div className="footer-upper">
<div className="footer-left">
<h1>MIHIR VERMA</h1>
<div className="page-links">
<a href="#home">HOME</a>
<a href="#about">ABOUT</a>
<a href="#projects">PROJECTS</a>
<a href="#skills">SKILLS</a>
<a href="#contact-form">MAIL</a>
</div>
</div>
<div className="footer-right">
    <h4>GET IN TOUCH WITH ME ON.</h4>
    <div className="social-links">
<a href="https://www.linkedin.com/in/mihir-verma-8414211b0/"><AiFillLinkedin/>LINKED-IN</a>
<a href="https://dribbble.com/IWON_1mihirv"><AiFillDribbbleCircle/>DRIBBLE</a>
<a href="https://github.com/mihirverma7781"><AiFillGithub/>GITHUB</a>
<a href="https://twitter.com/IWON_1"><AiFillTwitterSquare/>TWITTER</a>
</div>
</div>
</div>
<div className="footer-lower"><p>Copyright &#169; 2020 All Rights Reserved.</p>
</div>
       </div>
       </>
    )
}

export default Footers
