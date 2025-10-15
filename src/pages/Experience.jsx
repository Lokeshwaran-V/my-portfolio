import React from 'react'
import working from '../assets/working.png'
import '../styles/Experience.css'

export default function Experience() {
  return (
    <>
    <div className="experienceContainer">
        <div className="experienceLeftContainer">
            <div className="experienceTitle">Experience</div>
            <div className="experienceImage">
              <img src={working} alt="Experience" />
            </div>
        </div>

        <div className="experienceRightContainer">
            <div className="experienceJobtitle">
              <h2>Movate Technologies <span>Jun 2024 - Oct 2025</span></h2>
              <h4>Frontend Developer</h4>
              <p>- Developed responsive web applications using React.js, JavaScript, and CSS, with an emphasis on mobile-first design.</p>
              <p>- Used React hooks to reduce unnecessary re-renders and enhance app responsiveness.</p>
              <p>- Integrated REST APIs with dynamic rendering using Axios and proper error-handling mechanisms for smooth data-driven UIs.</p>
              <p>- Spearheaded the implementation of key customer-facing feature like virtual try-on (VTO), and Header (GNAV) redesign,
                resulting in significant improvements in user engagement around 37% and sales performance.</p>
              <p>- Optimized initial page load time by 30% through lazy loading, bundling strategies, and image optimization.</p>
            </div><br />
            <div className="experienceJobtitle">
              <h2>Jasmin Infotech Pvt Ltd <span>Jun 2019 - Jan 2022</span></h2>
              <h4>React Developer</h4>
              <p>- Designed user friendly web applications using React js, HTML, CSS and JavaScript</p>
              <p>- Implemented scalable, component-based architecture is used in applications, producing codebases that are uniform and manageable across projects.</p>
              <p>- Coordinated closely with backend developers to align API and optimized response handling for performance</p>
              <p>- Actively contributed to continuous integration pipelines by defining pre-commit hooks and build steps that validated code quality.</p>
            </div>
        </div>
    </div>
    
    </>
  )
}
