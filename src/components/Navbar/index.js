import { useEffect, useState } from "react";
import * as React from "react"
import { useMobileView } from "../../utils/useMobileView";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showScrollNavbar, setShowScrollNavbar] = useState(true);
  const isMobileView = useMobileView()
  
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
  
  const scrollTo = (element) => {
    let top;
    if (typeof element === "number") {
      top = element
    } else {
      let rect = element.getBoundingClientRect()
      let height = rect.height
      let pageHeight = window.innerHeight
      let padding = (Math.abs(pageHeight - height)) / 2
      top = element.offsetTop + padding
    }
    
    window.scrollTo({ top: top, behavior: 'smooth' })
  }
  
  return (
    <>
      <div className="navbar" style={{opacity: (showScrollNavbar ? 1 : 0)}}>
          {isMobileView && (
            <div className={`hamburger ${showSidebar && 'hamburger-toggled'}`} onClick={() => setShowSidebar(!showSidebar)}>
              <span className="sticks stick-1" />
              <span className="sticks stick-2" />
              <span className="sticks stick-3" />
            </div>
          )}
          <div className="navbar-logo" onClick={() => scrollTo(0)}>
            <span className="pre">Tanishq</span>
            <span className="mid">.</span>
            <span className="post">_</span>
          </div>
        {!isMobileView && (
          <div className="navbar-options">
            <div
              className="navbar-option"
              onClick={() => scrollTo(0)}
            >
              About
            </div>
            <div
              className="navbar-option"
              onClick={() => scrollTo(document.getElementsByClassName('expertise')[0])}>
              Expertise
            </div>
            <div
              className="navbar-option"
              onClick={() => scrollTo(document.getElementsByClassName('projects')[0])}>
              Work
            </div>
            <div
              className="navbar-option"
              onClick={() => scrollTo(document.getElementsByClassName('contact')[0])}>
              Contact
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar;