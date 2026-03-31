import arduinoSVG from '../assets/svgs/arduino/Arduino Uno 2.svg'
import orangeRadiant from "../assets/svgs/gradient/orangeEllipse-Full.svg";
import blueRadiant from "../assets/svgs/gradient/blueEllipse-Full.svg";
import keyboard from "../assets/keyboard.svg";

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../css/explain-section.css'
import img1 from '../assets/img/explaination/img1.png'


gsap.registerPlugin(ScrollTrigger);

function Explaination() {
    const mainRef = useRef(null);

        useGSAP(() => {
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".header-container",
                    start: "top top",
                    end: "+=150%", // adjust length as needed
                    pin: true,
                    scrub: 1,
                }
            });

             // 2. Keyboard reveal (after tagline)
            headerTl.from(".keyboard-wrapper img", {
                y: -50,
                opacity: 0,
                scale: 0.9,
                ease: "power2.out"
            });

            headerTl.to(".keyboard-wrapper", {
                y: () => {
                    return window.innerWidth < 768
                        ? window.innerHeight * 0.15
                        : window.innerHeight * 0.40;
                },
                duration: 3,
                ease: "none"
            });

            // 3. Title reveal (after keyboard)
            headerTl.from(".header-line", {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                ease: "power3.out"
            });


            // 1. Tagline reveal (line by line)
            headerTl.from(".tagline-line", {
                y: 100,
                opacity: 0,
                stagger: 0.3,
                ease: "power3.out"
            });

            
           
            headerTl.to(".header-title", {
                zIndex: 1999,
            });

            // headerTl.to(".orangeRadiant-header", {
            //     y: 150,
            //     ease: "none"
            // }, 0);



            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".explaination-container",
                    start: "top top",
                    end: "+=1500",  
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            tl.from(".iot-container", {
                y: 200,
                opacity: 0,
                ease: "power2.inOut",
            })
           
            // 1. These happen FIRST
            tl.from(".arduino-svg", {
                y: 200,
                opacity: 0,
                ease: "power2.inOut",
            })
            // The "<" means "start at the same time as the previous animation (arduino)"
            .from(".explaination-title", {
                opacity: 0,
                ease: "power2.inOut",
            })
            .from(".explaination-description", {
                opacity: 0,
                ease: "power2.inOut"
            });
            
            // 2. This happens SECOND
            const path = document.querySelector(".draw-path");
                
            if (path) {
                const length = path.getTotalLength();

                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length // (Don't forget the minus sign to draw backwards!)
                });

                tl.to(path, {
                    strokeDashoffset: 0,
                    ease: "none" 
                }); 
            }

            const quoteTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".quote-section",
                    start: "top", 
                    // If you want to pin it and scroll through it:
                    end: "+=2000",
                    pin: true,        // Use 'true' instead of '1'
                    pinSpacing: true, // Use 'true' instead of '1'
                    scrub: 1,         // Use scrub when pinning instead of toggleActions
                }
            });

            // The float-up animation for the quote
            quoteTl.from(".quote-text", {
                y: 100,           // Starts 100px lower
                opacity: 0,       // Starts invisible
                duration: 1.5,    // Takes 1.5 seconds to glide into place
                ease: "power3.out" 
            });

            quoteTl.to(".header-explain-container", {
                // 1. Darken the background
                "--bg-start": "#1B1121",
                "--bg-end": "#1B1121",

                duration: 1.5,
                ease: "none"
            }, "<");

            gsap.fromTo(".header-explain-container", 
                {
                    "--gradient-rotation": "180deg" // Initial state matches CSS
                },
                {
                    "--gradient-rotation": "360deg", // Target state rotates it upside down
                    ease: "none", 
                    scrollTrigger: {
                        trigger: ".quote-section", 
                        start: "top center",       
                        end: "bottom top",         
                        scrub: true,              
                    }
                }
            );
        }, { scope: mainRef });


    return(
        <>
        <div ref={mainRef}>
            <div className="header-explain-container">
                <section className="header-container">
                    <div className="keyboard-layer">
                        <div className="tagline">
                            <div className="tagline-line">From a single line of code</div>
                            <div className="tagline-line" style={{ marginLeft: "32px" }}>
                                to the pulse of a machine.
                            </div>
                        </div>

                        <div className="keyboard-wrapper">
                            <img src={keyboard} alt="Keyboard" />
                        </div>

                        <div className="header-title-wrapper">
                            <div className="header-title">
                                <div className="header-line">Computer</div>
                                <div className="header-line" style={{ fontStyle : "italic" }}>Engineering</div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="explaination-container">
                    {/* <img className="blueRadiant-header" src={blueRadiant} alt="Half Blue" /> */}                
                    <svg className="bg-line-svg"  width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="draw-path"  d="M1937.5 -52.5C1893.17 129.333 1746.3 369.9 1525.5 373.5C1249.5 378 1273 218.5 1056.5 209C840 199.5 847.5 578 611.5 592.5C375.5 607 286 897 121.5 911C-10.1 922.2 -32.6215 1080 -11.1215 1151.5V1165.5" stroke="url(#paint0_linear_318_25)" stroke-width="60" stroke-linecap="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_318_25" x1="1835.38" y1="130.5" x2="183.879" y2="1615.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4291FF"/>
                    <stop offset="1" stop-color="#9F4AAC"/>
                    </linearGradient>
                    </defs>
                    </svg>

                    <div className="item-container">
                        <div className="item-wrapper">
                            <div className="image-stack">
                                <div className="iot-container">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="arduino-container">
                                    <svg className="arduino-svg"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="870" height="841" viewBox="0 0 870 841" fill="none">
                                        <rect width="870" height="870" fill="url(#pattern0_184_25)"/>
                                        <defs>
                                        <pattern id="pattern0_184_25" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_184_25" transform="scale(0.000420168)"/>
                                        </pattern>
                                        <image id="image0_184_25" width="2381" height="2379" xlinkHref={arduinoSVG}/>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <div className="text-content">
                                <h2 className="explaination-title">It’s More Than Just Circuits</h2>
                                <p className="explaination-description">
                                    Computer engineering is an integrated branch of engineering that blends 
                                    computer science with electronic engineering to develop hardware and 
                                    software systems. It goes beyond simply building computers; it involves 
                                    designing everything from the tiny microprocessors in your smartphone to 
                                    the massive supercomputers that predict the weather. By mastering both 
                                    digital logic and high-level programming, engineers ensure that machines 
                                    are not only fast but also efficient and reliable. At its core, it is about 
                                    problem-solving through the lens of technology, creating the infrastructure 
                                    that defines our modern world. It is the art of making sure that every bit 
                                    of data has a physical path to travel and every physical component has a 
                                    logical reason to move.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="quote-section">
                <div className="quote-container">
                    <h1 className="quote-text">
                        Beyond the pulse lies the harmony of the machine: its <span className="highlight-pink">physical body</span> and its <span className="highlight-green">digital soul</span>.
                    </h1>
                </div>
            </section>
            </div>
        </div>
        
    </>
    )
}

export default Explaination;