import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/projects-section.css';

import img1 from '../assets/img/museum/1.png';
import img2 from '../assets/img/museum/2.png';
import img3 from '../assets/img/museum/3.png';
import img4 from '../assets/img/museum/4.png';
import img5 from '../assets/img/museum/5.png';
import img6 from '../assets/img/museum/6.png';
import img7 from '../assets/img/museum/7.png';
import img8 from '../assets/img/museum/8.png';
import img9 from '../assets/img/museum/9.png';
import img10 from '../assets/img/museum/10.png';

gsap.registerPlugin(ScrollTrigger);

// Then in your map function:
// style={{ marginTop: item.offsetY, marginLeft: item.marginLeft }}

function Projects() {
    const mainRef = useRef(null);
    const trackRef = useRef(null);
    useGSAP(() => {
        if (!trackRef.current || !mainRef.current) return;

        const track = trackRef.current;
        const container = document.querySelector(".museum-track");

        const getScrollAmount = () => track.scrollWidth - window.innerWidth;

        // 1. Horizontal Scroll Timeline
        gsap.to(container, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
                trigger: ".museum-section",
                pin: true,
                start: "top top",
                end: () => `+=${getScrollAmount()}`,
                scrub: 1,
                invalidateOnRefresh: true,
            }            
        });

        const narrate1TL = gsap.timeline({
            scrollTrigger: {
                trigger: ".narrative1-section",
                start: "top top",
                end: "+=150%", // Slightly shorter pin for tighter feel
                pin: true,
                pinSpacing: true,
                scrub: 1,
            }
        });

        const path = document.querySelector(".narrative1-path")


        if (path) {
            const length = path.getTotalLength();
            console.log("Path length is:", length);
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length
            });

            narrate1TL.to(path, {
                strokeDashoffset: 0,
                duration: 1.5,
                ease: "power1.inOut"
            }, 0); 
        }

        narrate1TL.to(".museum-wrapper", {
            "--grad-left-solid": "rgba(255, 0, 85, 0)",
            "--grad-right-solid": "rgba(66, 145, 255, 0)",
            duration: 1
        });
        narrate1TL.to(".narrative1-section", {
            backgroundColor: "#1B1121", // Or your solid target color
            backgroundImage: "none",     // Explicitly kill any local gradients
            duration: 1,
            ease: "none"
        }, "<");
        narrate1TL.to(".narrative2-section", {
            backgroundColor: "#1B1121", // Or your solid target color
            backgroundImage: "none",     // Explicitly kill any local gradients
            duration: 1,
            ease: "none"
        }, "<");

        narrate1TL.from(".narrative1-title", {
            y: 100, // Reduced from 200 for a smoother glide
            opacity: 0,
            ease: "power2.out",
        }, "<");

        

        // 3. Narrative 2 Timeline
        const narrate2TL = gsap.timeline({
            scrollTrigger: {
                trigger: ".narrative2-section",
                start: "top top",
                end: "+=150%",
                pin: true,
                pinSpacing: true,
                scrub: 1,
            }
        });
        

        narrate2TL.from(".narrative2-title", {
            y: 100, 
            opacity: 0,
            ease: "power2.out",
        });

    }, { scope: mainRef });
    const items = [
        // The large starting image
        { img: img1, text: "Kiosks connect the kitchen...", offsetY: "15vh", marginLeft: "0vw", width: "400px" }, 
        
        // The wave starts going down and up
        { img: img2, text: "Arduino UNO...", offsetY: "55vh", marginLeft: "4vw", width: "250px" },
        { img: img3, text: "Ultrasonic Sensor...", offsetY: "20vh", marginLeft: "2vw", width: "280px" },
        { img: img4, text: "Nano drone...", offsetY: "65vh", marginLeft: "5vw", width: "220px" },
        
        // Middle section
        { img: img5, text: "Smart Home...", offsetY: "30vh", marginLeft: "3vw", width: "250px" },
        { img: img6, text: "Robotics...", offsetY: "50vh", marginLeft: "6vw", width: "200px" },
        { img: img7, text: "IoT Devices...", offsetY: "15vh", marginLeft: "2vw", width: "240px" },
        
        // End of the timeline
        { img: img8, text: "AI Applications...", offsetY: "40vh", marginLeft: "4vw", width: "350px" },
        { img: img9, text: "Blockchain...", offsetY: "60vh", marginLeft: "5vw", width: "200px" },
        { img: img10, text: "Cloud Computing...", offsetY: "25vh", marginLeft: "3vw", width: "300px" },
    ];

   return (
    <div ref={mainRef} className="museum-wrapper">
        <section className="museum-section" ref={trackRef}>
            <div className="museum-track" >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="museum-item"
                        style={{ 
                            marginTop: item.offsetY,
                            marginLeft: item.marginLeft,
                            width: item.width,
                        }}
                    >
                        {/* We wrap the image and text in a "glass-effect" card */}
                        <div className="museum-card">
                            {/* The image now fills the top part of the card */}
                            <div className="card-image-container">
                                <img src={item.img} alt={item.text} />
                                {/* We can add a hidden 'glow-effect' div here for hover */}
                                <div className="hover-glow"></div>
                            </div>
                            
                            {/* The text sits in its own footer below the image */}
                            <div className="card-details">
                                <p className="item-text">{item.text}</p>
                                {/* Optional: Add a subtle category tag for detail */}
                                <span className="item-category">Project</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        
        <section className="narrative1-section default-bg">
            
            <div className="1-narrative item-container">
                <div className="narrative-item-wrapper">
                    <h1 className="narrative1-title">
                        From the microscopic logic of a single chip to the global architecture of the internet—
                    </h1>
                </div>
            </div>
        </section>

        <section className="narrative2-section default-bg">        
            
            <div className="narrative2-container item-container">
                <div className="narrative-item-wrapper">
                    <h1 className="narrative2-title">
                        the choice of what you build is <span className="highlight-orange">yours.</span>
                    </h1>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Projects;
