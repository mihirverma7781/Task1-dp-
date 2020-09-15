import React from "react";
import lines from "../images/lines.svg";
import '../stylesheets/About.css'
const About = () => {
  return (
    <div className="aboutsec" id="about">
        <div className="a-inner">
      <div className="about-header">
        <h2>About Me</h2>
          <img src={lines} alt="image not found" />
        <br/>
      </div>
      <div className="about-info">
        <p>
          I'm a beginner Front-End Web Developer presently working on React JS.

          Sharpening my skills & trying to get more knowledge in this field. I
          have good knowledge of C, C++, Data structure algorithms & Java.
          Seeking opportunities to know more about data science & Web
          development industry and practical implementations of it. I love to
          work on HTML, CSS, javascript to make attractive and robust Web
          applications & websites.
        </p>
      </div>
      <a href="#">DOWNLOAD MY CV</a>
      </div>
    </div>
  );
};

export default About;
