import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import portrait from "../images/portrait2.jpg"
import Link from "gatsby-link"
import jork from "../images/jork.svg"


const IndexPage = () => (
    <Layout style={{ display: `grid`, flexDirection: `column`, flexWrap: `nowrap`, height: `100vh`, alignContent: `center`, alignItems: `center`, minWidth: `400px` }}>
    <SEO title="jordank.co | Homepage" />

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
  }}>hi, i'm jordan köerner</h1>
  <h1 style={{
    padding: `5vh 0vw 5vh 3vw`,
    color: `black`,
    fontSize: `2em`,
    marginBottom: `0`,
    maxWidth: `80%`,
  }}>i manage projects</h1>
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
    <h4 style={{
      fontSize: `1rem`,
      color: `white`,
      background: `black`,
      padding: `1vh 1vw 2vh 1vw`,
      margin: `0 0 0 0`,
      justifyContent: `start`,
      alignItems: `center`,
      textAlign: `center`,
      minHeight: `8vh`,
      maxHeight: `8vh`,
      bottom: `0`,
      display: `grid`,
      minWidth: `100%`,
      left: `0`,
      position: `absolute`,

}}>las vegas, nv</h4>
  </Link>
  </div>
  <div class="imgwrap" style={{  width: `100%` }}>
    <a href="/">
      <img src={jork} className="animated bounce" alt="jordank.co" style={{ 
        maxWidth: `60px`, 
        height: `auto`, 
        margin: `auto`, 
        top: `0`,
        right: `0`,
        position: `absolute`,


        }} />
        </a>
    </div>
        
    </Layout>
  )
  
  export default IndexPage