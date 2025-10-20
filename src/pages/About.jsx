import React, { useEffect } from "react";
import "../styles/About.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="about" id="About">
      <div className="about__left">
        <div className="about__description">
          <p
            data-aos="fade-right"
            data-aos-duration="1300"
            className="about__text about__text--intro"
          >
            I'm <span className="about__name">Lokeshwaran</span> Frontend
            developer
          </p>
          <p
            data-aos="fade-left"
            data-aos-duration="1200"
            className="about__text about__text--experience"
          >
            4+ years of expertise in React Js.
          </p>
        </div>
      </div>
    </section>
  );
}
