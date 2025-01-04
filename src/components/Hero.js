import React from 'react';
import '../App.css';

const Hero = () => {
    return (
        <div className="hero-wrapper">
            {/* Hero Section */}
            <header className="hero">
                <div className="container">
                    {/* Top Navigation */}
                    <nav className="hero-nav">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    {/* Hero Content */}
                    <div className="hero-content">
                        <div className="hero-image">
                            <img 
                                src="hero-ray.webp" 
                                alt="Ray Banks" 
                                className="profile-image"
                            />
                        </div>
                        <div className="hero-text">
                            <h1>
                                <span className="hero-intro">Hi, I’m</span>
                                <span className="hero-name">Ray Banks
                                    <img
                                    src="/underline.png"
                                    alt="underline"
                                    className="underline"
                                    />
                                </span>
                            </h1>
                            <p>
                                I’m a Marketer turned Software Engineer based in the Bay Area. I love to travel, make videos and have new experiences.
                            </p>
                        </div>
                    </div>
                    
                    {/* About Section */}
                    <section id="about" className="about-section">
                        <div className="about-container">
                            <h2>About Me</h2>
                            <p>
                                Hello! I'm Ray Banks. For the past 10 years I've been working with technology doing marketing, business development and sales. I've always been a curious learner with a strong desire to create and build things and that has led me to software engineering. I'm a creative person and very excited to start bringing many ideas to life!
                            </p>
                        </div>
                    </section>
                </div>
            </header>
        </div>
    );
};

export default Hero;