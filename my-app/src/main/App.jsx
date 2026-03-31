import { useEffect, useState } from 'react'
import './App.css'
import Header from '../pages/Header.jsx'
import Explain from '../pages/Explain-section.jsx'
import HardwareSoftware from '../pages/HardwareSoftware-section.jsx'
import Projects from '../pages/Projects-section.jsx'
import HeaderNavbar from '../pages/Navbar.jsx'
import FloatingNavbar from '../pages/Floating-Navbar.jsx'
import Landing from '../pages/Landing.jsx'
import SkewTransition from '../pages/Careers-section.jsx'
import BigProjects from '../pages/Bigprojects-section.jsx'
import TheEnd from '../pages/TheEnd-section.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [showFloating, setShowFloating] = useState(false)

  // for floating navbar toggle
  useEffect(() => {
    
    const handleScroll = () => {
      const scroll = window.scrollY

      setShowFloating(prev => {
        if (scroll > 800 && !prev) return true
        if (scroll <= 800 && prev) return false
        return prev
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <>
    {/* <HeaderNavbar /> */}
    <FloatingNavbar show={showFloating}/>

    <section className="landing-container">
      <Landing/>
    </section>
    <Explain/>
    <HardwareSoftware/>
    <Projects/>
    <SkewTransition/>
    <BigProjects/>
    <TheEnd/>
    </>
  )
}

export default App
