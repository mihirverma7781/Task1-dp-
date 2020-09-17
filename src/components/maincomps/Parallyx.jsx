import React from "react";
import { Parallax } from "react-parallax";
import lines from "../images/lines.svg";
import '../stylesheets/Parallyx.css'
const image4 =
  "https://images.unsplash.com/photo-1544205467-093edde0d165?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1428&q=80";
const insideStyles = {
  background: "rgba(248, 248, 248, 0)",
  padding: 50,
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%,-50%)",
  
};

const Parallyx = () => {
  return (
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 244, 244,.900)`,
              left: "50%",
              top: "50%",
              borderRadius: "0%",
              transform: "translate(-50%,-50%)",
              width: percentage * 1700,
              height: percentage * 800,
             
            }}
          />
        </div>
      )}
    >
      <div className="main-parallyx" style={{ height: 500 }} id="more">
        <div className="parallyx-info" style={insideStyles}>
        <div className="about-header">
        <h1>WHAT I DO</h1>
          <img src={lines} alt="image not found" />
        <br/>
      </div>
      Developed unique user experiences that drove interaction, using Javascript.
Designed and developed views/templates on top of HTMS ,CSS. Created and implemented a custom CSS flex system, with CSS media queries for mobile responsiveness.
Tested front-end code in multiple browsers to ensure cross-browser compatability. Participated in projects in all stages of the product life cycle.
Created and maintained the front-end standards document and oversaw production of Javascript, HTML, and CSS. Developed fully functional responsive prototypes based on Business Requirements using HTML/HTML5, CSS3, JavaScript and React-Js.
        </div>
      </div>
    </Parallax>
  );
};

export default Parallyx;
