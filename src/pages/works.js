import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import portrait from "../images/portrait2.jpg"
import Link from "gatsby-link"


const ContactPage = () => (
    <Layout style={{ display: `grid`, flexDirection: `column`, flexWrap: `nowrap`, height: `100vh`, alignContent: `center`, alignItems: `center`, minWidth: `400px` }}>
    <SEO title="jordank.co | Contact" />

<div className="grid-container" style={{
zIndex: `100`,
    backgroundImage: `url(${portrait})`, 
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `right bottom`,
    backgroundSize: `50vh`,
    height: `100vh`,
    marginBottom: `0vh`,
  }}>
<div className="left" style={{
 }}> 
  <h1 style={{ 
    padding: `8vh 0vw 5vh 3vw`,
    color: `white`,
    background: `black`,
    marginBottom: `0`,
    fontSize: `2em`,
    maxWidth: `85%`,
  }}>services</h1>
  <h1 style={{
    padding: `5vh 0vw 5vh 3vw`,
    color: `black`,
    fontSize: `2em`,
    marginBottom: `0`,
    maxWidth: `80%`,
  }}>skills</h1>
    <h1 style={{
    maxWidth: `55%`,
    padding: `5vh 0vw 5vh 3vw`,
    background: `#e8de2a`,
    color: `black`,
    fontSize: `1.5em`,
    margin: `0`,

  }}>and i do other stuff, too</h1>
     
     <Link to="/about">
  <button className="buttonJ" style={{
  }}>
    about me 
    </button>
    </Link>
    <Link to="/work">
    <button className="buttonJ" >
      my work 
    </button>
    </Link>
    <br />
    <Link to="/services">
    <button className="buttonJ" >
      services 
    </button>
    </Link>
    <Link to="/contact">
    <button className="buttonJ" >
    contact   
    </button>
    </Link>
  </div>
  <Link to="/freeconsultation">
  <div className="right" style={{
    minWidth: `30vw`,
    background: `green`,
  }}>
    <h4 style={{
      fontSize: `1rem`,
      color: `white`,
      background: `red`,
      padding: `1vh 1vw 2vh 1vw`,
      margin: `0 0 0 25vw`,
      justifyContent: `center`,
      alignItems: `center`,
      textAlign: `center`,
      minHeight: `8vh`,
      maxHeight: `8vh`,
      top: `0`,
      display: `grid`,

}}>FREE CONSULTATION</h4>
  </div>
  </Link>
  </div>
        
    </Layout>
  )
  
  export default ContactPage