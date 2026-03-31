import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/careers-section.css';

import imgFrame from '../assets/svgs/careers/careers-frame-img1.png';
import vid1 from '../assets/video/careers/careers-vid1.mp4'; 
import vid2 from '../assets/video/careers/careers-vid2.mp4'; 
import vid3 from '../assets/video/careers/careers-vid3.mp4'; 
import vid4 from '../assets/video/careers/careers-vid4.mp4'; 
import vid5 from '../assets/video/careers/careers-vid5.mp4'; 
import vid6 from '../assets/video/careers/careers-vid6.mp4'; 
import vid7 from '../assets/video/careers/careers-vid7.mp4'; 

gsap.registerPlugin(ScrollTrigger);

const careersData = [
    {
        id: 0,
        title: "Software & Systems Development",
        text: " The architects of the digital experience. This field covers everything from writing raw code and building mobile apps to designing complex operating systems and high-performance websites. ",
        bgVideo: vid1
    },
    {
        id: 1,
        title: "Hardware Engineering",
        text: "The physical foundation. Engineers in this space design, prototype, and test the tangible components that power our world, including microprocessors, motherboards, and integrated circuits.",
        bgVideo: vid2
    },
    {
        id: 2,
        title: "Artificial Intelligence & Robotics ",
        text: "The frontier of machine learning. This field focuses on building systems that mimic human intelligence, creating robots that can perform complex labor and software that learns from experience.",
        bgVideo: vid3
    },
    {
        id: 3,
        title: "Cybersecurity",
        text: "The digital shield. Professionals here build robust infrastructures to protect databases and networks from evolving cyber threats, ensuring the integrity of global information.",
        bgVideo: vid4
    },
    {
        id: 4,
        title: "Networking & IT Infrastructure ",
        text: "The backbone of connectivity. This specialization involves designing and maintaining the systems (LAN, WAN, and Cloud) that allow devices and people to communicate across the globe.",
        bgVideo: vid5
    },
    {
        id: 5,
        title: "Data Science & Analytics ",
        text: "The power of information. These specialist  ts manage vast databases and use statistical modeling to interpret complex data, turning raw numbers into predictive insights.",
        bgVideo: vid6
    },
    {
        id: 6,
        title: "Game Development",
        text: "The intersection of logic and creativity. This team-based field combines physics engines, audio engineering, and animation to build immersive digital worlds and interactive entertainment.",
        bgVideo: vid7
    }
];

function SkewTransition() {
    const mainRef = useRef(null);
    const videoRefs = useRef([]);
    const introTextRef = useRef(null);

    useGSAP(() => {
        gsap.set(".software-section:not(.slide-0)", { 
            yPercent: 100 
        });

        // Add +1 to the length to give the final zoom-out enough scroll space
        const totalScroll = (careersData.length + 1) * 300; 

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: `+=${totalScroll}%`, 
                pin: true,
                pinSpacing: true,
                scrub: 1,
                markers: true,
            }
        });

        careersData.forEach((section, index) => {
            
            // --- THE TRUE "PAN UP" TRANSITION ---
            if (index > 0) {
                tl.to(`.slide-${index - 1}`, {
                    yPercent: -100, 
                    ease: "power2.inOut",
                })
                .to(`.slide-${index}`, {
                    yPercent: 0, 
                    ease: "power2.inOut",
                }, "<");
            }

            // --- ANIMATE CURRENT SECTION ---
            
            // C. Zoom IN the frame
            tl.to(`.frame-img-${index}`, {
                scale: 50, 
                ease: "power2.in", 
            })
            
            // D. Show Text 
            .fromTo(`.text-content-${index}`, 
                { y: 100, opacity: 0 }, 
                { y: 0, opacity: 1, ease: "power2.out" }, 
                "<" 
            );

            // E. Wait (Fake pause for scrolling)
            tl.to({}, { duration: 0.1 }); 

            // F. Hide Text & Zoom OUT
            // (The IF statement has been removed here!)
            tl.to(`.text-content-${index}`, {
                y: -50,
                opacity: 0,
                ease: "power2.in"
            })
            
            tl.to(`.frame-img-${index}`, {
                scale: 1, 
                ease: "power2.inOut",
            }, "<");
            
        });

        tl.to({}, {duration: 0.2});

        gsap.from(introTextRef.current, {
            y: 80, // Starts 80px lower
            opacity: 0, 
            duration: 2,
            pin: true,
            pinSpacing: true, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: introTextRef.current,
                start: "top 85%", // Triggers when the top of the text is 85% down the viewport
            }
        });

    }, { scope: mainRef });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        }, { 
            threshold: 0.1
        });

        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video);
        });

        return () => observer.disconnect();
    }, []);

    return(
        <> 
            {/* 1. THE PINNED GSAP CONTAINER */}
            <div className="main-container" ref={mainRef}>
                <div className="wrapper">
                    {careersData.map((item, index) => (
                        <section key={item.id} className={`software-section slide-${index}`}>
                            <video 
                                ref={(el) => (videoRefs.current[index] = el)}
                                className="section-bg" 
                                src={item.bgVideo} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            />

                            <div className={`careers-container text-content text-content-${index}`}>
                                <h1 className="career-title">{item.title}</h1>
                                <p>{item.text}</p>
                            </div>

                            <div className="frame-container">
                                <img src={imgFrame} alt="Frame" className={`frame-img frame-img-${index}`} />
                            </div>
                        </section>
                    ))}
                </div>
            </div> {/* <-- THIS DIV WAS PREVIOUSLY BELOW THE CAREERS-LAST-SECTION. MOVE IT HERE. */}

            <section className="careers-last-section">
                <div className="careers-text-container">
                    <h2 className="projects-intro-text" ref={introTextRef}>
                        Theory becomes reality when these fields collide—let's look at <span className="italic-text">some</span> projects that define <br/> 
                        <span className="highlight-text">Computer Engineering.</span>
                    </h2>
                </div>
            </section>
        </>
    );
}

export default SkewTransition;