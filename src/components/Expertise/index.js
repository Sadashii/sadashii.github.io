import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as React from "react";
import { useEffect, useRef } from "react";
import backgroundImage from "../../images/expertise-bg.png"

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const titleRef = useRef();
  const categoriesRef = useRef();
  const backgroundImageRef = useRef();
  
  useEffect(() => {
    let animations = [
      {
        element: titleRef.current,
        start: 'top 75%',
        end: 'bottom 50%',
      },
      {
        element: categoriesRef.current,
        start: 'top 65%',
        end: 'bottom 50%',
      },
    ]
  
    const onEnter = (el, opacity = 1) => {
      if (!el) return
      el.style.opacity = opacity
      el.style.transform = 'translateY(0px)'
    }
    const onLeaveBack = (el) => {
      if (!el) return
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }
  
    for (const animation of animations) {
      gsap.to(animation.element, {
        scrollTrigger: {
          trigger: animation.element,
          start: animation.start,
          end: animation.end,
          onEnter: () => onEnter(animation.element),
          onLeaveBack: () => onLeaveBack(animation.element)
        }
      });
    }
    
    gsap.to(backgroundImageRef.current, {
      scrollTrigger: {
        trigger: backgroundImageRef.current,
        start: "top 75%",
        end: "bottom 50%",
        onEnter: () => onEnter(backgroundImageRef.current, .25),
        onLeaveBack: () => onLeaveBack(backgroundImageRef.current)
      }
    });
  });
  
  return (
    <div className="expertise page">
      <h2 className="heading" ref={titleRef}>My Expertise</h2>
      <div className="categories" ref={categoriesRef}>
        <div className="category">
          <div className="title-container">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
            </svg>
            <h3 className="title">
              <span className="color-blue">Software</span> Development</h3>
          </div>
          <p className="description">Coding is fun, what's better? Knowing both OOP and functional programming, I love Python and JavaScript the most that's
            why.</p>
        </div>
        <div className="category">
          <div className="title-container">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,11H18A1,1 0 0,0 17,12V21A1,1 0 0,0 18,22H23A1,1 0 0,0 24,21V12A1,1 0 0,0 23,11M23,20H18V13H23V20M20,2H2C0.89,2 0,2.89 0,4V16A2,2 0 0,0 2,18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22,2.89 21.1,2 20,2Z" />
            </svg>
            <h3 className="title"><span className="color-green">Frontend</span> Development</h3>
          </div>
          <p className="description">In love with making beautiful sleek webpages, they come out best when I'm working with React (Razzle.js/Next.js/Gatsby) and
            Material UI with hint of sass every now and then. </p>
        </div>
        <div className="category">
          <div className="title-container">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
            </svg>
            <h3 className="title"><span className="color-red">Backend</span> Development</h3>
          </div>
          <p className="description">Just like a body needs a heart, a website is incomplete without a backend. For me, it's express.js or flask.</p>
        </div>
      </div>
      <div className="background-image" ref={backgroundImageRef}>
        <img src={backgroundImage} alt={"Easter egg background"} />
      </div>
    </div>
  );
};

export default Expertise;