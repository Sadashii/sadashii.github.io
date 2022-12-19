import { graphql, useStaticQuery } from "gatsby";
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
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          siteUrl,
          description
        }
      }
    }
  `)
  const { title, description, siteUrl} = data.site.siteMetadata
  return (
    <>
      <title>{title} - Fullstack Developer & Software Engineer</title>
      <meta name={'description'} content={description} />
      <link rel="canonical" href={`${siteUrl}/`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}/`} />
      <meta property="og:image" content={`${siteUrl}/favicon-32x32.png`} />
    </>
  )
}

export default IndexPage;