import React from 'react';
import working from '../assets/working.png';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="Experience">
      <div className="experience__container">
        <div className="experience__left">
          <h2 className="experience__title">Experience</h2>
          <div className="experience__image">
            <img src={working} alt="Experience Illustration" />
          </div>
        </div>

        <div className="experience__right">
          <div className="experience__job">
            <div className="experience__job-header">
              <h3 className="experience__job-company">Movate Technologies</h3>
              <span className="experience__job-duration">Jun 2024 - Oct 2025</span>
            </div>
            <div className="experience__job-description">
              <h4 className="experience__job-title">Frontend Developer</h4>
              <ul className="experience__job-points">
                <li>Developed responsive web applications using React.js, JavaScript, and CSS, with an emphasis on mobile-first design.</li>
                <li>Used React hooks to reduce unnecessary re-renders and enhance app responsiveness.</li>
                <li>Integrated REST APIs with dynamic rendering using Axios and proper error-handling mechanisms for smooth data-driven UIs.</li>
                <li>Spearheaded key customer-facing features like virtual try-on (VTO) and Header (GNAV) redesign, increasing user engagement by 37%.</li>
                <li>Optimized initial page load time by 30% through lazy loading, bundling strategies, and image optimization.</li>
              </ul>
            </div>
          </div>

          <div className="experience__job">
            <div className="experience__job-header">
              <h3 className="experience__job-company">Jasmin Infotech Pvt Ltd</h3>
              <span className="experience__job-duration">Jun 2019 - Jan 2022</span>
            </div>
            <div className="experience__job-description">
              <h4 className="experience__job-title">React Developer</h4>
              <ul className="experience__job-points">
                <li>Designed user-friendly web applications using React.js, HTML, CSS, and JavaScript.</li>
                <li>Implemented scalable, component-based architecture producing uniform and manageable codebases.</li>
                <li>Coordinated closely with backend developers to align API and optimized response handling for performance.</li>
                <li>Actively contributed to continuous integration pipelines by defining pre-commit hooks and build steps that validated code quality.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
