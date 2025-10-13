import React from "react";
import "../styles/Skills.css";
import HTML from "../assets/HTML_logo.jpg";
import CSS from "../assets/CSS_logo.jpg";
import JAVASCRIPT from "../assets/Javascript_logo.png";
import REDUX from "../assets/Redux_logo.png";
import TAILWIND from "../assets/Tailwindcss_logo.png";

export default function Skills() {
  return (
    <>
      <div className="SkillsContainer" id="Skills">
        <div className="SkillsLeftContainer">
          <div className="title">
            <h2>Skills</h2>
          </div>
          <br />
          <div className="description">
            <p>
            I have hands-on experience in <strong>HTML</strong>, <strong>CSS</strong>, and 
            <strong>JavaScript</strong> for building responsive and interactive user interfaces.<br />
            <div className="skillProgress">
              <div className="child">
                <img src={HTML} alt="" />
                <progress value={99} max={100}></progress>
              </div>
              <div className="child">
                <img src={CSS} alt="" />
                <progress value={99} max={100}></progress>
              </div>
              <div className="child">
                <img src={JAVASCRIPT} alt="" />
                <progress value={75} max={100}></progress>
              </div>
            </div><br /><br />
            I’m skilled in <strong>Redux Toolkit</strong> for efficient state management and 
            <strong>Tailwind CSS</strong> for creating modern, mobile-friendly designs.<br /><br />
            <div className="skillProgress">
              <div className="child">
                <img src={REDUX} alt="" />
                <progress value={80} max={100}></progress>
              </div>
              <div className="child">
                <img src={TAILWIND} alt="" />
                <progress value={60} max={100}></progress>
              </div>
            </div><br /><br />
            Additionally, I have experience working with <strong>RESTful APIs</strong> to integrate 
            backend services seamlessly into web applications.
            </p>
          </div>
        </div>
        <div className="SkillsRightContainer">
          <div className="logos">
            <ul>
              <li>
                <img src={HTML} alt="Html" />
                <p>HTML</p>
              </li>
              <li>
                <img src={CSS} alt="Css" />
                <p>CSS</p>
              </li>
              <li>
                <img src={JAVASCRIPT} alt="JavaScript" />
                <p>JavaScript</p>
              </li>
              <li>
                <img src={REDUX} alt="Redux" />
                <p>Redux</p>
              </li>
              <li>
                <img src={TAILWIND} alt="Tailwind" />
                <p>Tailwind</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
