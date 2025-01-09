import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Projects Title */}
        <h2 className="projects-title">Projects</h2>

        {/* Countdown to 100K Project */}
        <div className="project-card red-hover">
          <div className="project-image-container">
            <img
              src="./yt-100k-light-red.png"
              alt="Countdown to 100K"
              className="default-image"
            />
            <img
              src="yt-100k-red.png"
              alt="Countdown to 100K Hover"
              className="hover-image"
            />
          </div>
          <h3>Countdown to 100K</h3>
          <p>Get an estimate of how soon you'll get to 100K YT subscribers and get a silver play button!</p>
          <div className="project-links">
            <a href="https://github.com/rayhbanks/countdown-to-100k">GitHub</a>
            <a href="https://ray-banks.com/countdown-to-100k/">Live Demo</a>
          </div>
        </div>

        {/* Where I've Been Inclusive (WIBI) Project */}
        <div className="project-card blue-hover">
          <div className="project-image-container">
            <img
              src="./where-ive-been-blue.png"
              alt="Where I've Been Default"
              className="default-image"
            />
            <img
              src="./where-ive-been-white.png"
              alt="Where I've Been Hover"
              className="hover-image"
            />
          </div>
          <h3>Where I've Been - Inclusive</h3>
          <p>Track the countries you've been to and choose whichever countries you'd like to count e.g. Taiwan, Palestine, etc. (this is under active development and will have regular updates)</p>
          <div className="project-links">
            <a href="https://github.com/rayhbanks/wibi-app">GitHub</a>
            <a href="https://ray-banks.com/wibi-app/">Live Demo</a>
          </div>
        </div>
        {/* My Portfolio Project */}
        <div>
          <div className="project-card yellow-hover">
          <div className="project-image-container">
            <img
              src="./portfolio-screenshot.png"
              alt="Ray's portfolio screenshot"
              className="default-image"
            />
            <img
              src="./portfolio-screenshot.png"
              alt="Ray's portfolio screenshot"
              className="hover-image"
            />
          </div>
          <h3>My Portfolio</h3>
          <p>This is my portfolio website which I created to practice learning React and showcase my work.</p>
          <div className="project-links">
            <a href="https://github.com/rayhbanks/Ray-Banks-Portfolio">GitHub</a>
            <a href="https://ray-banks.com">Live Demo</a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;