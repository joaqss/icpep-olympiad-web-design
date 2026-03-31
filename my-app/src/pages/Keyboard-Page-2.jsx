import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import keyboardSVG from '../assets/svgs/keyboard/keyboard.svg'; 

gsap.registerPlugin(ScrollTrigger);

function KeyboardPage2() {
    const containerRef = useRef(null);

    useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=4000",      // CRITICAL: Tells GSAP to pin it for exactly 2000px of scrolling
            pin: true,
            pinSpacing: true,   // Keeps the next section pushed down
            scrub: 1,           // Smoothly links the animation to the scrollbar
            markers: true,      // Keep on to see the red 'end' marker 2000px down the page
        }
    });
    
    tl.from(".arduino-svg", {
        y: 200,
        opacity: 0,
        ease: "power2.inOut",
    })
    .from(".explaination-title", {
        opacity: 0,
        ease: "power2.inOut",
    })
    .from(".explaination-description", {
        opacity: 0,
        ease: "power2.inOut"
    });

    }, { scope: containerRef });

    return (
        <section className="keyboard-page-container" ref={containerRef}>
            
            <div className="text-content-wrapper">
                <p className="small-text">From a single line of code<br/>to the pulse of a machine.</p>
                <h1 className="large-text">Computer<br/>Engineering</h1>
            </div>

            <svg className="keyboard-svg" width="928" height="398" viewBox="0 0 928 398" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="928" height="398" fill="url(#pattern0_146_432)"/>
                <defs>
                    <pattern id="pattern0_146_432" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_146_432" transform="matrix(0.000757737 0 0 0.00176678 -0.000864354 0)"/>
                    </pattern>
                    <image id="image0_146_432" width="1222" height="566" xlinkHref={keyboardSVG}/>
                </defs>
            </svg>
            
        </section>
    )
}

export default KeyboardPage2;