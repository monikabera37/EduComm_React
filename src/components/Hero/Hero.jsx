import React from "react";
import "./Hero.css";
import dark_arrow from "../../assests/dark-arrow.png"

const Hero = () => {
  return <div className="hero container">
  <div className="hero_text">
  <h1>We Ensure better Eduction</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus suscipit pariatur consequuntur magnam impedit, ipsa et repellat voluptatibus minima.</p>
<button className="btn">Explore more <img src={dark_arrow} alt="arrow"/></button>
  </div>

  </div>;
};

export default Hero;
