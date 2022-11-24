import * as React from "react"
import "../styles/styles.scss"
import { Expertise, Landing, Navbar } from "../components";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Expertise />
    </>
  )
}


export const Head = () => <title>Tanishq Sangwan | Fullstack Developer</title>

export default IndexPage