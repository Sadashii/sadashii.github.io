import * as React from "react"

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span className="pre">Sadashi</span>
        <span className="mid">.</span>
        <span className="post">_</span>
      </div>
      <div className="navbar-options">
        <div className="navbar-option">About</div>
        <div className="navbar-option">Expertise</div>
        <div className="navbar-option">Experience</div>
        <div className="navbar-option">Work</div>
        <div className="navbar-option">Contact</div>
      </div>
    </div>
  )
}

export default Navbar;