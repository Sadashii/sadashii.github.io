import * as React from "react"
import "../styles/styles.scss"
import { Contact, CustomCursor, Expertise, Footer, Landing, Navbar, Projects } from "../components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const IndexPage = ({ location }) => {
  
  return (
    <>
      <Navbar location={location} />
      <Landing />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
      <CustomCursor />
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

export default IndexPage;