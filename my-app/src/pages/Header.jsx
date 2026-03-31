import '../css/Header.css'
import keyboard from "../assets/keyboard.svg";
import halfOrange from "../assets/svgs/gradient/orangeEllipse-Full.svg";
import halfBlue from "../assets/svgs/gradient/blueEllipse-Full.svg";
import orangeRadiant from "../assets/svgs/gradient/orangeEllipse-Full.svg";
import blueRadiant from "../assets/svgs/gradient/blueEllipse-Full.svg";
import arduinoSVG from '../assets/svgs/arduino/Arduino Uno 2.svg'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

function Header() {

    const mainRef = useRef(null);

    useGSAP(() => {

        const q = gsap.utils.selector(mainRef);

        // =========================
        // 🔥 MASTER SCROLL
        // =========================
        const masterTL = gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "+=8000",
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        // =========================
        // 🔥 INITIAL STATES
        // =========================
        gsap.set(q(".tagline"), { opacity: 0, y: 50 });
        gsap.set(q(".header-line"), { opacity: 0, y: 80 });

        // =========================
        // 🔥 HEADER TIMELINE
        // =========================
        const headerTL = gsap.timeline();

        headerTL
            .to(q(".tagline"), {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out"
            })

            .from(q(".keyboard-wrapper"), {
                y: -50,
                opacity: 0,
                duration: 2,
                ease: "power2.out"
            })

            .to(q(".keyboard-wrapper"), {
                y: () => {
                    return window.innerWidth < 768
                        ? window.innerHeight * 0.15
                        : window.innerHeight * 0.45;
                },
                duration: 3,
                ease: "none"
            })

            .to(q(".header-line"), {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 1.5,
                ease: "power2.out"
            }, "-=2");


        // =========================
        // 🔥 EXPLAIN TIMELINE
        // =========================
        const explainTL = gsap.timeline();

        explainTL
            .from(q(".arduino-svg"), {
                y: 200,
                opacity: 0,
                duration: 2,
                ease: "power2.out"
            })

            .from(q(".explaination-title"), {
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            }, "-=1.5")

            .from(q(".explaination-description"), {
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            }, "-=1.2");


        // =========================
        // 🔥 PATH DRAW TIMELINE
        // =========================
        const pathTL = gsap.timeline();

        const path = q(".draw-path")[0];

        if (path) {
            const length = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length
            });

            pathTL.to(path, {
                strokeDashoffset: 0,
                duration: 3,
                ease: "none"
            });
        }


        // =========================
        // 🔥 QUOTE TIMELINE
        // =========================
        const quoteTL = gsap.timeline();

        quoteTL.from(q(".quote-text"), {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
        });


        // =========================
        // 🔥 COMBINE ALL
        // =========================
        masterTL
            .add(headerTL)
            .add(explainTL)
            .add(pathTL)
            .add(quoteTL);

    }, { scope: mainRef });

    return(
        <div className="headersec-container" ref={mainRef}>

            <section className="keyboard-layer">

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

            </section>

            <section className="explaination-container">
                <svg width="2154" height="1344" viewBox="0 0 2154 1344" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2123.24 30.0068C2078.91 211.84 1932.04 452.407 1711.24 456.007C1435.24 460.507 1469 360.007 1252.5 350.507C1036 341.007 1033.24 660.507 797.239 675.007C407 698.983 471.739 979.507 307.239 993.507C175.639 1004.71 29.9998 1064.01 30 1174.01L30 1314.01" stroke="url(#paint0_linear_318_27)" strokeWidth="80" stroke-linecap="round"/>
                <defs>
                <linearGradient id="paint0_linear_318_27" x1="2021.12" y1="213.007" x2="369.618" y2="1698.01" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4291FF"/>
                <stop offset="1" stopColor="#9F4AAC"/>
                </linearGradient>
                </defs>
                </svg>




                <div className="item-container">
                    <div className="item-wrapper">
                        <div className="image-stack">
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nam in ultrices lorem, vel accumsan sem. Ut gravida et 
                                felis laoreet ultrices.
                            </p>
                        </div>
                    </div>
                </div>

                <img className="orangeRadiant-explainSection svg" src={orangeRadiant} alt="Half Orange" />
                <img className="blueRadiant-explainSection" src={blueRadiant} alt="Half Blue" /> 
            </section>


            <section className="quote-section">
                <div className="quote-container">
                    <h1 className="quote-text">
                        Beyond the pulse lies the harmony of the machine: its <span className="highlight-pink">physical body</span> and its <span className="highlight-green">digital soul</span>.
                    </h1>
                </div>
            </section>
  
            <img className="half-orange svg" src={halfOrange} alt="Half Orange" />
            <img className="half-blue svg" src={halfBlue} alt="Half Blue" />

            
        </div>
    )
}

export default Header;