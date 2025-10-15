import React, { useEffect } from 'react'
import myImage from '../assets/myImage.jpg'
import '../styles/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function About() {
  useEffect (() => {
    Aos.init();
  },[]);
  return (
    <>
    <div className="aboutContainer" id='About'>
        <div className="aboutLeftContainer">
            <div className="aboutDescription">
                <p data-aos="fade-right" data-aos-duration = "1300">I'm <span>Lokeshwaran</span> Frontend developer</p>
                <p data-aos="fade-left" data-aos-duration = "1200"> with 4+ years of expertize in React Js.</p>
            </div>
        </div>
    </div>
    </>
  ) 
}
