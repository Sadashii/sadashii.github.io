import { useEffect, useRef } from "react";
import * as React from "react"
import "../styles/styles.scss"
import { Contact, Expertise, Landing, Navbar, Projects } from "../components";
import Kinet from 'kinet';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
  const customCursorRef = useRef()
  
  useEffect(() => {
    const cursorEl = customCursorRef.current
    const cursor = new Kinet({
      acceleration: .2,
      names: ['x', 'y'] // 'Instances' on which our cursor will move
    })
    let mouseY = 0
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    
    cursor.on('tick', function(instances) {
      cursorEl.style.top = `${instances.y.current}px`
      cursorEl.style.left = `${instances.x.current}px`
      let divider = 10
      let scale = Math.max(instances.x.velocity / divider, instances.y.velocity / divider, 1)
      cursorEl.style.transform = `scaleX(${scale}), scaleY(${scale})`;
    });
    
    document.addEventListener('mousemove', (event) => {
      cursor.animate('x', event.clientX);
      cursor.animate('y', event.clientY + scrollTop);
      mouseY = event.clientY
    })
    document.addEventListener('scroll', event => {
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      cursor.animate('y', scrollTop + mouseY)
    })
  }, [])
  
  return (
    <>
      <Navbar />
      <Landing />
      <Expertise />
      <Projects />
      <Contact />
      <p style={{textAlign: 'center', marginBottom: '2rem', opacity: '.7'}}>Made by ❤️by <a href={"https://github.com/Sadashii"} rel={'noreferrer'} target={"_blank"}>Tanishq Sangwan</a> / ©2023</p>
      <div ref={customCursorRef} className="customCursor"></div>
    </>
  )
}


export const Head = () => {
  //let domain = 'sadashi.xyz'
  let domain = 'localhost:8000'
  let title = 'Tanishq Sangwan - Fullstack Developer & Software Engineer'
  let description = 'Fullstack developer who specializes in building on the web with MERN and Next.js handy.'
  
  return (
    <>
      <title>{title}</title>
      <meta name={'description'} content={description} />
      <link rel="canonical" href={`https://${domain}/`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://${domain}/`} />
      <meta property="og:site_name" content="Tanishq Sangwan" />
      <meta property="og:image" content={`https://${domain}/favicon-32x32.png`} />
    
      <link rel={'apple-touch-icon'} href={'/apple-touch-icon.png'} />
      <link rel={'icon'} type={'image/png'} sizes={'16x16'} href={'/favicon-16x16.png'} />
      <link rel={'icon'} type={'image/png'} sizes={'32x32'} href={'/favicon-32x32.png'} />
      <link rel={'icon'} type={'image/png'} href={'/favicon.ico'} />
    
      <meta name="theme-color" content="#1a191d" />
    </>
    )
}

export default IndexPage