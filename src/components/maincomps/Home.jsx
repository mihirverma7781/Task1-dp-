import React from "react";
import Myphoto from "../images/one.jpeg"
import "../stylesheets/Home.css"
const Home = () => {
  return (
    <div className="home-comp" id="home">
      <div className="home-left">
        <div className="left-upper">
          <h1>Mihir Verma</h1>
          <br />
          <p>Front-End Web Developer</p>
        </div>
        <div className="left-lower">
        
            <li className="home-li">
              <a className="home-link home-btn" href="#contact" id="contact-btn">
                CONTACT ME
              </a>
            </li>
            <li className="home-li">
              <a className="home-link home-btn" href="#about" id="explore-btn">
                EXPLORE MORE
              </a>
            </li>
          
        </div>
      </div>
      <div className="home-right">
          <div className="home-img">
              <img src={Myphoto} alt='image not found'/>
          </div>
      </div>
    </div>
  );
};

export default Home;
