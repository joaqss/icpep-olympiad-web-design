import '../css/Floating-Navbar.css'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function FloatingNavbar({ show }) {

  const scrollToSection = (selector) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: selector,
        offsetY: 80, // 👈 adjust based on your layout
        autoKill: true,
      },
      ease: "power3.inOut"
    });
  };

  return (
    <div className={`floating-navbar ${show ? "show" : "hide"}`}>
      <button className="navbar-button" onClick={() => scrollToSection("#home")}>
        Home
      </button>

      <button className="navbar-button" onClick={() => scrollToSection("#projects")}>
        Projects
      </button>

      <button className="navbar-button" onClick={() => scrollToSection("#careers")}>
        Careers
      </button>

      <button className="navbar-button" onClick={() => scrollToSection("#epilogue")}>
        Epilogue
      </button>
    </div>
  );
}

export default FloatingNavbar;