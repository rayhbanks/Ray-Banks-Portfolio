import React from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* Hero Section */}
            <section id="home" className="hero-section">
                <Hero />
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <Projects />
            </section>
      
            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <Contact />
            </section>
        </div>
    );
}

export default App;