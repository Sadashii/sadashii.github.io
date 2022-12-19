import { Link } from "gatsby";
import { useEffect, useState } from "react";
import * as React from "react"
import { useMobileView } from "../../utils/useMobileView";

const Navbar = ({ location }) => {
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
      //let rect = element.getBoundingClientRect()
      //let height = rect.height
      //let pageHeight = window.innerHeight
      //let padding = (Math.abs(pageHeight - height)) / 2
      //top = element.offsetTop + padding
      top = element.offsetTop
    }
    
    window.scrollTo({ top: top, behavior: 'smooth' })
  }
  
  const goToPage = (e) => {
    if (location.pathname === e.target.pathname) { // On the same page
      e.preventDefault()
  
      if (!e.target.hash) {
        return scrollTo(0)
      }
      
      let el = document.getElementById(e.target.hash.slice(1))
      let scrollHeight = el.dataset.scrollHeight // Sorta override for what height it should scroll to
      scrollTo(scrollHeight ? parseInt(scrollHeight) : el)
    }
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
        <Link to={'/'} className={'navbar-logo'} onClick={goToPage}>
          <span className="pre">Tanishq</span>
          <span className="mid">.</span>
          <span className="post">_</span>
        </Link>
        {!isMobileView && (
          <div className="navbar-options">
            <Link to={'/'} className="navbar-option" onClick={goToPage}>
              About
            </Link>
            <Link to={'/#expertise'} className="navbar-option" onClick={goToPage}>
              Expertise
            </Link>
            <Link to={'/#projects'} className="navbar-option" onClick={goToPage}>
              Projects
            </Link>
            <Link to={'/#contact'} className="navbar-option" onClick={goToPage}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar;