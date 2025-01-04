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

        {/* Where I've Been - Inclusive Project */}
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
          <p>Track the countries you've been to and choose whichever countries you'd like to count e.g. Taiwan, Palestine, etc. (this is still under development and will be released soon!</p>
          <div className="project-links">
            <a href="#github-link-placeholder">GitHub</a>
            <a href="#live-demo-placeholder">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;