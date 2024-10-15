import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="text-content">
        <h1>Unleash the full potential of AI</h1>
        <p>AI Ally is a versatile assistant that utilizes state-of-the-art natural language processing to provide real-time support and assistance across various domains.</p>
        <div className="buttons">
          <button className="get-app-btn">
            Get the App <i className="fas fa-arrow-right"></i>
          </button>
          <button className="more-btn">More</button>
        </div>
        <div className="stats">
          <div className="stat">
            <h2>4.8</h2>
            <p>Rating on AppStore</p>
          </div>
          <div className="stat">
            <h2>700k+</h2>
            <p>Active users</p>
          </div>
        </div>
      </div>
      <div className="image-content">
        <img
          src="src\assets\images\image.png"
          alt="Hand holding a smartphone displaying AI Ally app"
        />
      </div>
    </section>
  );
};

export default HeroSection;
