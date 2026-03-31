import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { ScrollTrigger, SplitText } from 'gsap/all'
import '../css/Landing.css'

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollToPlugin)


function Landing() {

    // gsap animation for landing page

    useEffect(() => {
      const container = document.querySelector(".horizontal");
      const path = document.querySelector(".landing-path-svg");

      if (!container || !path) return;

      // 🔥 TEXT ANIMATION (unchanged)
      const split = new SplitText(".line", { type: "lines" });

      gsap.from(split.lines, {
        y: 50,
        opacity: 0,
        duration: 3,
        stagger: 0.4,
        ease: "power3.out"
      });

      // 🔥 SVG SETUP
      const length = path.getTotalLength();
      const initialShown = 0.25;

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
      });

      gsap.to(path, {
        strokeDashoffset: length * (1 - initialShown),
        duration: 1.5,
        ease: "power2.out"
      });

      // 🔥 SCROLL HANDLER
      const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;

      // 👉 DRAW LINE
      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      const totalProgress = initialShown + (1 - initialShown) * progress;
      const draw = length * (1 - totalProgress);

      path.style.strokeDashoffset = draw;

      // 🔥 FADE OUT AT END
      const fadeStart = maxScroll * 0.9;

      if (scrollTop >= fadeStart) {
        const fadeProgress = (scrollTop - fadeStart) / (maxScroll - fadeStart);

        gsap.to(path, {
          opacity: 1 - fadeProgress,
          duration: 0.1,
          overwrite: true
        });

      } else {
        gsap.to(path, {
          opacity: 1,
          duration: 0.1,
          overwrite: true
        });
      }

    };

      container.addEventListener("scroll", handleScroll);

      // 🔥 CLEANUP
      return () => {
        container.removeEventListener("scroll", handleScroll);
        split.revert();
      };

    }, []);

    return(

    <div className="wrapper">
      <section className="horizontal" >
        <div className="panels">
          <div className="panel panel-1">
            <div className="landing-title">
              <div className="line">your</div>
              <div className="line">journey</div>
              <div className="line">starts here</div>
              <div className="line line-small"> Scroll down to start </div>
            </div>           
          </div>
          <div className="panel panel-2"></div>


        </div>

        <svg className="landing-svg" viewBox="0 0 3000 1050" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="landing-path-svg" d="M0.932617 300.5C16.266 294.333 58.1326 281.4 102.933 279C147.733 276.6 206.933 281.439 230.933 284.158C260.933 289.272 329.133 309.7 361.933 350.5C402.933 401.5 417.433 415.5 425.433 440C431.833 459.6 428.099 481.5 425.433 490C419.266 499.167 402.433 521.2 384.433 536C361.933 554.5 336.433 572 304.933 579C273.433 586 260.933 595 230.933 587C206.933 580.6 204.933 542.333 206.933 524C207.099 504.5 215.733 460.4 248.933 440C290.433 414.5 330.433 374 404.933 379C479.433 384 502.433 385 541.433 407.5C572.633 425.5 661.766 507.333 702.433 546C734.766 574.833 813.933 635.8 871.933 649C944.433 665.5 1005.43 700 1082.93 715.5C1144.93 727.9 1218.77 745 1247.93 752C1296.1 761.667 1395.33 781.2 1406.93 782C1421.43 783 1562.93 798 1603.93 800C1636.73 801.6 1797.93 800.667 1874.43 800C1939.77 797.5 2078.93 790.4 2112.93 782C2155.43 771.5 2273.93 743.5 2295.43 735C2316.93 726.5 2468.93 660.5 2532.93 606.5C2584.13 563.3 2649.93 479.5 2676.43 443C2682.1 433.5 2694.93 408.8 2700.93 386C2706.93 363.2 2710.43 333.167 2711.43 321C2713.1 304.167 2716.13 265.3 2714.93 244.5C2713.43 218.5 2698.43 180 2696.43 176C2694.83 172.8 2668.1 136 2654.93 118C2646.6 106.833 2627.13 81.8 2615.93 71C2604.73 60.2 2571.6 36.8333 2556.43 26.5C2539.93 18.5 2502.13 2.5 2482.93 2.5C2458.93 2.5 2405.43 2.5 2398.93 2.5C2392.43 2.5 2302.93 7.5 2292.93 11C2282.93 14.5 2198.93 27 2186.93 35.5C2174.93 44 2116.43 92 2098.43 133C2080.43 174 2054.43 220 2052.93 274C2051.43 328 2052.93 357 2055.93 387.5C2058.33 411.9 2078.27 468.333 2087.93 493.5C2106.77 528.5 2145.93 600.8 2151.93 610C2159.43 621.5 2206.43 671 2213.43 677.5C2220.43 684 2279.93 740.5 2311.93 763C2337.53 781 2424.6 835.167 2464.93 860C2498.43 885 2582.63 939.1 2651.43 955.5C2720.23 971.9 2814.77 980.333 2853.43 982.5C2893.93 986.167 2981.73 996.5 3008.93 1008.5C3036.13 1020.5 3056.93 1035.17 3063.93 1041L3067.43 1058" stroke="url(#paint0_linear_105_35)" strokeWidth="9"/>
                <defs>
                <linearGradient id="paint0_linear_105_35" x1="16.9326" y1="288" x2="2556.93" y2="288" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9E42"/>
                <stop offset="1" stopColor="#4291FF"/>
                </linearGradient>
                </defs>
          </svg>

          

      </section>

      
    </div>
       
    );

}

export default Landing