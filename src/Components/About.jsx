import React from "react";
import {AboutImg} from "../Constant/Allimages"

import './About.css'
const About = () => {
  return (
    <section className="about">
      <div className="about-image">
        <img src={AboutImg} alt="Smartwatch" />
      </div>
      <div className="about-content">
        <h2>About Our Smartwatch</h2>
        <p>
          Our latest smartwatch combines style, innovation, and functionality. With 
          advanced health tracking, seamless connectivity, and a sleek design, it's 
          perfect for your everyday needs.
        </p>
        <p>
          Stay ahead with real-time notifications, music storage, and a long-lasting 
          battery. Elevate your lifestyle with cutting-edge technology at your wrist.
        </p>
      </div>
    </section>
  );
};

export default About;
