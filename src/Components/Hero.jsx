import React from "react";
import watchimg from "../Constant/Allimages"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Brilliant watch that inspire to explore life</h1>
        <p>Our smartwatches are engineered with precision and style in mind.</p>
        <button className="cta-button">
          🛒 Add to Cart
        </button>
      </div>
      <div className="hero-image">
        <img src={watchimg} alt="Smartwatch" />
      </div>
    </section>
  );
};

export default Hero;
