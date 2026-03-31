import '../css/TheEnd-section.css'
import kidImg from '../assets/svgs/kid/kid.svg'
import Rectangle from '../assets/svgs/kid/rect.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function TheEnd() {
    const containerRef = useRef(null);
    const pathRef = useRef(null);

    useGSAP(() => {
        // --- ANIMATION 1: Draw the SVG Line on Scroll ---
        const path = pathRef.current;
        const pathLength = path.getTotalLength();
        
        // Hide the line initially by pushing the dash offset
        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".final-sequence-wrapper",
                start: "top 60%", // Starts drawing when top of section hits 60% of viewport
                end: "bottom 70%", // Finishes drawing near the bottom
                scrub: 1, // "1" adds a 1-second smoothing delay so it feels elegant
            }
        });

        // --- ANIMATION 2: Intro Headings (Fade & Slide Up) ---
        gsap.from(".main-heading", {
            y: 50, 
            opacity: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: { trigger: ".theend-content", start: "top 80%" }
        });
        
        gsap.from(".sub-heading", {
            y: 50, 
            opacity: 0, 
            duration: 1, 
            delay: 0.2, // Staggered slightly after the first heading
            ease: "power3.out",
            scrollTrigger: { trigger: ".theend-content", start: "top 80%" }
        });

        // --- ANIMATION 3: The Kid & Final Call Text ---
        gsap.from(".kid-illustration-container", {
            y: 100, 
            opacity: 0, 
            duration: 1.5, 
            ease: "power4.out",
            scrollTrigger: { trigger: ".kidtheend-section", start: "top 70%" }
        });

        gsap.from(".kid-text-container", {
            scale: 0.9, 
            opacity: 0, 
            duration: 1, 
            delay: 0.5, // Waits for the girl to appear first
            ease: "back.out(1.5)", // Gives it a slight "pop" effect
            scrollTrigger: { trigger: ".kidtheend-section", start: "top 70%" }
        });

        // --- ANIMATION 4: The Massive CE Text ---
        gsap.from(".ce-massive-text", {
            y: 80, 
            opacity: 0, 
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: { trigger: ".ce-final-section", start: "top 80%" }
        });

        gsap.from(".ce-subtext", {
            x: 50, // Slides in from the right
            opacity: 0, 
            duration: 1, 
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: { trigger: ".ce-final-section", start: "top 60%" }
        });

    }, { scope: containerRef });


    return (
        <>
        <div ref={containerRef}>
            <div className="final-sequence-wrapper">
                <div className="svg-background">
                    
                    <svg width="1896" height="2246" viewBox="0 0 1896 2246" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={pathRef}d="M1860 30.0078C1914 180.174 1531.5 799.808 1089.5 785.008C537 766.508 30 476.508 30 954.008C30 1431.51 525.5 1142.51 751 1153.51C976.5 1164.51 1036.5 1275.01 1036.5 1375.01C1036.5 1475.01 879.432 1512.16 689 1521.51C498.568 1530.86 506.541 2130.94 614 2215.51" stroke="url(#paint0_linear_348_321)" stroke-width="60" stroke-linecap="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_348_321" x1="184.134" y1="203.508" x2="-717.822" y2="1653.34" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF0055"/>
                    <stop offset="0.259615" stop-color="#40C0AC"/>
                    <stop offset="0.524038" stop-color="#40C0AC"/>
                    <stop offset="0.743439" stop-color="#40C0AC" stop-opacity="0"/>
                    <stop offset="0.817034" stop-color="#40C0AC" stop-opacity="0"/>
                    <stop offset="1" stop-color="#40C0AC"/>
                    </linearGradient>
                    </defs>
                    </svg>

                </div>

                <section className="theend-section">
                    <div className="theend-container">

                        {/* THE BACKGROUND LINE */}
                        

                        {/* THE TEXT CONTENT */}
                        <div className="theend-content">
                            <h1 className="main-heading">We’ve seen the code, and we’ve felt the pulse.</h1>
                            <h1 className="sub-heading">The only question left is...</h1>
                        </div>
                    </div>
                </section>
                <section className="kidtheend-section">
                    <div className="kid-illustration-container">
                        <div className="kid-illustration-content">                            
                            <svg width="647" height="1032" viewBox="0 0 647 1032" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <image href={kidImg} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                            </svg>
                        </div>
                    </div>
                    <div className="kid-text-container">
                        <h1 className="final-call">
                            what will <span className="highlight-you">you</span> build first?
                        </h1>
                    </div>
                </section>
            </div>

            <section className="ce-final-section">
                <div className="ce-text-container">
                    <h1 className="ce-massive-text">Computer<br/>Engineering</h1>
                    <p className="ce-subtext">From a single line of code<br/>to the pulse of a machine.</p>
                </div>
            </section>
        </div>
        
        </>
        
        
    );
}

export default TheEnd;