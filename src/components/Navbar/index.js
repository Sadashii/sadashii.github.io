import { useEffect, useState } from "react";
import * as React from "react"

const Navbar = () => {
  const [showScrollNavbar, setShowScrollNavbar] = useState(true);
  
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
  
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY <= lastScrollY;
      if (direction !== showScrollNavbar && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setShowScrollNavbar(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  })
  
  const scrollTo = (height) => {
    window.scrollTo({ top: height, behavior: 'smooth' })
  }
  
  return (
    <>
      <div className="navbar" style={{opacity: (showScrollNavbar ? 1 : 0)}}>
        <div className="navbar-logo" onClick={() => scrollTo(0)}>
          <span className="pre">Sadashi</span>
          <span className="mid">.</span>
          <span className="post">_</span>
        </div>
        <div className="navbar-options">
          <div
            className="navbar-option"
            onClick={() => scrollTo(0)}
          >
            About
          </div>
          <div
            className="navbar-option"
            onClick={() => scrollTo(document.getElementsByClassName('expertise')[0].offsetTop)}>
            Expertise
          </div>
          <div
            className="navbar-option"
            onClick={() => {
            
            }}>
            Experience
          </div>
          <div
            className="navbar-option"
            onClick={() => {
            
            }}>
            Work
          </div>
          <div
            className="navbar-option"
            onClick={() => {
            
            }}>
            Contact
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;