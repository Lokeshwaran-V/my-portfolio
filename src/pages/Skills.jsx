import React, { useEffect } from "react";
import "../styles/Skills.css";
import HTML from "../assets/HTML_logo.jpg";
import CSS from "../assets/CSS_logo.jpg";
import JAVASCRIPT from "../assets/Javascript_logo.png";
import REDUX from "../assets/Redux_logo.png";
import TAILWIND from "../assets/Tailwindcss_logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="SkillsContainer" id="Skills">
        <div className="SkillsLeftContainer">
          <div className="title" data-aos="fade-up" data-aos-duration="500">
            <h2>Skills</h2>
          </div>
          <br />
          <div className="description">
            <p data-aos="fade-right" data-aos-duration="500">
              I have hands-on experience in <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, and <strong>JavaScript</strong> for building
              responsive and interactive user interfaces.
            </p>
            <div className="skillProgress">
              <div
                className="child"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="1000"
              >
                <img src={HTML} alt="" />
                <progress value={99} max={100}></progress>
              </div>
              <div
                className="child"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <img src={CSS} alt="" />
                <progress value={99} max={100}></progress>
              </div>
              <div
                className="child"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="650"
              >
                <img src={JAVASCRIPT} alt="" />
                <progress value={75} max={100}></progress>
              </div>
            </div>
            <br />
            <br />
            <p
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="1300"
            >
              I’m skilled in <strong>Redux Toolkit</strong> for efficient state
              management and
              <strong>Tailwind CSS</strong> for creating modern, mobile-friendly
              designs.
              <br />
              <br />
            </p>
            <div className="skillProgress">
              <div
                className="child"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="2000"
              >
                <img src={REDUX} alt="" />
                <progress value={80} max={100}></progress>
              </div>
              <div
                className="child"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="1650"
              >
                <img src={TAILWIND} alt="" />
                <progress value={60} max={100}></progress>
              </div>
            </div>
            <br />
            <br />
            <p
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="2300"
            >
              Additionally, I have experience working with{" "}
              <strong>RESTful APIs</strong> to integrate backend services
              seamlessly into web applications.
            </p>
          </div>
        </div>
        <div className="SkillsRightContainer">
          <div className="logos">
            <ul>
              <li data-aos="fade-up" data-aos-duration="1500">
                <img src={HTML} alt="Html" />
                <p>HTML</p>
              </li>
              <li data-aos="fade-up" data-aos-duration="1500">
                <img src={CSS} alt="Css" />
                <p>CSS</p>
              </li>
              <li data-aos="fade-up" data-aos-duration="1500">
                <img src={JAVASCRIPT} alt="JavaScript" />
                <p>JavaScript</p>
              </li>
              <li data-aos="fade-down" data-aos-duration="1500">
                <img src={REDUX} alt="Redux" />
                <p>Redux</p>
              </li>
              <li data-aos="fade-down" data-aos-duration="1500">
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
