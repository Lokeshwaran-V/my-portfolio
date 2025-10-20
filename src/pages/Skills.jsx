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
    <section className="skills" id="Skills">
      <div className="skills__container">
        <div className="skills__left">
          <div className="skills__title" data-aos="fade-up" data-aos-duration="500">
            <h2>Skills</h2>
          </div>
          <div className="skills__description">
            <p data-aos="fade-right" data-aos-duration="800">
              I have hands-on experience in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> for building responsive and interactive user interfaces.
            </p>
            <div className="skills__progress">
              <div className="skills__progress-item" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1000">
                <img src={HTML} alt="HTML" />
                <progress value={99} max={100}></progress>
              </div>
              <div className="skills__progress-item" data-aos="fade-right" data-aos-duration="500" data-aos-delay="650">
                <img src={CSS} alt="CSS" />
                <progress value={99} max={100}></progress>
              </div>
              <div className="skills__progress-item" data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">
                <img src={JAVASCRIPT} alt="JavaScript" />
                <progress value={75} max={100}></progress>
              </div>
            </div>

            <p data-aos="fade-right" data-aos-duration="500" data-aos-delay="600">
              I’m skilled in <strong>Redux Toolkit</strong> for efficient state management and <strong>Tailwind CSS</strong> for creating modern, mobile-friendly designs.
            </p>
            <div className="skills__progress">
              <div className="skills__progress-item" data-aos="fade-right" data-aos-duration="500" data-aos-delay="650">
                <img src={REDUX} alt="Redux" />
                <progress value={80} max={100}></progress>
              </div>
              <div className="skills__progress-item" data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">
                <img src={TAILWIND} alt="Tailwind" />
                <progress value={60} max={100}></progress>
              </div>
            </div>

            <p data-aos="fade-right" data-aos-duration="500" data-aos-delay="600">
              Additionally, I have experience working with <strong>RESTful APIs</strong> to integrate backend services seamlessly into web applications.
            </p>
          </div>
        </div>

        <div className="skills__right">
          <div className="skills__logos">
            <ul className="skills__logos-list">
              <li className="skills__logo-item" data-aos="fade-up" data-aos-duration="600">
                <img src={HTML} alt="HTML" />
                <p>HTML</p>
              </li>
              <li className="skills__logo-item" data-aos="fade-up" data-aos-duration="600">
                <img src={CSS} alt="CSS" />
                <p>CSS</p>
              </li>
              <li className="skills__logo-item" data-aos="fade-up" data-aos-duration="600">
                <img src={JAVASCRIPT} alt="JavaScript" />
                <p>JavaScript</p>
              </li>
              <li className="skills__logo-item" data-aos="fade-down" data-aos-duration="600">
                <img src={REDUX} alt="Redux" />
                <p>Redux</p>
              </li>
              <li className="skills__logo-item" data-aos="fade-down" data-aos-duration="600">
                <img src={TAILWIND} alt="Tailwind" />
                <p>Tailwind</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
