import '../css/Floating-Navbar.css'

function FloatingNavbar({ show }) {
  return (
    <div className={`floating-navbar ${show ? "show" : "hide"}`}>
      <a href=".header-container">Home</a>
      <a href=".projects-container">About</a>
      <a href=".careers-container">Careers</a>
    </div>
  )
}

export default FloatingNavbar