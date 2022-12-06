import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as React from "react"
import copy from "clipboard-copy";

const Contact = () => {
  const titleRef = useRef();
  const categoriesRef = useRef();
  const contactButtonRef = useRef();
  const otherContactsRef = useRef();
  
  useEffect(() => {
    let animations = [
      {
        element: titleRef.current,
        start: 'top 75%',
        end: 'bottom 50%',
      },
      {
        element: categoriesRef.current,
        start: 'top 75%',
        end: 'bottom 50%',
      },
      {
        element: contactButtonRef.current,
        start: 'top 85%',
        end: 'bottom 50%',
      },
      {
        element: otherContactsRef.current,
        start: 'top 90%',
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
  });
  
  return (
    <div className="expertise page contact">
      <h2 className="heading" ref={titleRef}>Contact</h2>
      <p className="contact-cta" ref={categoriesRef}>
        Nothing too fancy here - I'd love to have a chat with you whether it's for a cool project or just a hey!
      </p>
      <p onClick={async () => {
        await copy('tanishqsangwan7@gmail.com')
        contactButtonRef.current.innerText = 'Copied!'
        setTimeout(() => contactButtonRef.current.innerText = 'tanishqsangwan7@gmail.com', 5000)
      }}
      className={'contact-link'}
      ref={contactButtonRef}>
        tanishqsangwan7@gmail.com
      </p>
      <div className="other-contact" ref={otherContactsRef}>
        <a href={'https://www.instagram.com/iamtanishqbtw/'} target={"_blank"} rel={'noreferrer'}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
          </svg>
        </a>
        <a href={'https://www.linkedin.com/in/tanishq-sangwan/'} target={"_blank"} rel={'noreferrer'}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
          </svg>
        </a>
        <a href={'https://github.com/Sadashii'} target={"_blank"} rel={'noreferrer'}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Contact;