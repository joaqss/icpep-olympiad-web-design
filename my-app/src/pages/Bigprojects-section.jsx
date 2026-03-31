import React, { useState } from 'react';
import '../css/bigprojects-section.css';
import img1 from '../assets/img/bigprojects/img1.png';
import img2 from '../assets/img/bigprojects/img2.png';
import img3 from '../assets/img/bigprojects/img3.png';

function BigProjects() {
    // State to track which card is expanded. 0 means the first card is open by default.
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Computers",
            img: img1,
            desc: "The physical components like the CPU (Brain), RAM (Short-term memory), and Motherboard (Nervous system). It's about making hardware as efficient as possible."
        },
        {
            id: 2,
            title: "Generative AI",
            img: img3,
            desc: "Exploring the frontier of machine learning and creative computation through generative models like GPT and Stable Diffusion."
        },
        {
            id: 3,
            title: "Smart Homes",
            img: img2,
            desc: "Integrating IoT devices to create an automated, responsive living environment that learns from user behavior."
        }
    ];

    return (
        <section className="bigprojects-section">
            <div className="projects-wrapper">
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className={`project-card ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        <div className="project-image-container">
                            <img src={project.img} alt={project.title} className="project-img" />
                        </div>
                        <div className="project-info">
                            <h1 className="project-title">{project.title}</h1>
                            <p className="project-description">{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BigProjects;