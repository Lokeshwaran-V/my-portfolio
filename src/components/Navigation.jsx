import React from "react";
import "../styles/Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <div className="Home" id="Home">
        <h1>Portfolio</h1>
      </div>

      <div className="Pages" id="Pages">
        <ul>
          <li className="About">
            <a href="#About">About Me</a>
          </li>
          <li className="Skills">
            <a href="#Skills">Skills</a>
          </li>
          <li className="Experiences">
            <a href="#Experiences">Experiences</a>
          </li>
          <li className="Projects">
            <a href="#Projects">Projects</a>
          </li>
          <li className="Contact">
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="Mode" id="Mode">
        <button>Mode</button>
      </div>
    </nav>
  );
}
