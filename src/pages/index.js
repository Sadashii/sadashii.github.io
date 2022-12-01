import { Link } from "gatsby";
import * as React from "react"
import "../styles/styles.scss"
import { Contact, Expertise, Landing, Navbar, Projects } from "../components";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Expertise />
      <Projects />
      <Contact />
      <p style={{textAlign: 'center', marginBottom: '2rem', opacity: '.7'}}>Made by ❤️by <Link to={"https://github.com/Sadashii"}>Tanishq Sangwan</Link> / ©2023</p>
    </>
  )
}


export const Head = () => <title>Tanishq Sangwan | Fullstack Developer</title>

export default IndexPage