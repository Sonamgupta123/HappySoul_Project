import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1>Build Confidence & Mental Wellness</h1>
        <p>
          A safe place to grow emotionally, improve focus and take care of your mind.
        </p>
        <Link to="/activities" className="hero-btn">Start Your Journey</Link>
      </div>

      <div className="hero-right">
        <img
          src="/assets/cr2.png"
          alt="mental wellness illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
};

export default HeroSection;
