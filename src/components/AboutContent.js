import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a Front-end developer passionate about building responsive,
          user-friendly, and secure web applications. I focus on crafting
          seamless user experiences and writing clean, efficient code to bring
          ideas to life.
        </p>
        <a
          href="https://drive.google.com/file/d/1Jm_fq0mJn5M9f3EByyR2Qlmesq8IzNEA/view?usp=sharing"
          download
          className="btn"
        >
          Download CV
        </a>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
