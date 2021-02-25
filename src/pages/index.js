import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import portrait from "../images/portrait2.jpg"
import Link from "gatsby-link"


const IndexPage = () => (
    <Layout>
    <SEO title="jordank.co | Homepage" />

<div style={{
    backgroundImage: `url(${portrait})`, 
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `right bottom`,
    backgroundSize: `50vh`,
    height: `100vh`,
    marginBottom: `0vh`,

  }}>
       <div style={{
             padding: `10vh 3vw 3vh 3vw`,
             fontSize: `3rem`,
             lineHeight: `4rem`,
             fontFamily: `Poppins`,
             fontWeight: `700px`,
             maxWidth: `100%`,

       }}>
    hi, i'm  jordan köerner</div>
<div className="buttonJ" style={{     
    color: `white`,
    padding: `3vh 3vw 3vh 3vw`,
    fontSize: `1.5rem`,
    lineHeight: `2rem`,
    fontFamily: `Poppins`,
    background: `black`,
    right: `0`,
    width: `50%`,
    textAlign: `center`,
    display: `flex`,
    flexDirection: `column`,
    }}>

      i manage technical projects
      </div>
      <div className="buttonJ" style={{     
    color: `white`,
    padding: `3vh 3vw`,
    marginBottom: `0`,
    fontSize: `1.25rem`,
    lineHeight: `1.5rem`,
    fontFamily: `Poppins`,
    background: `black`,
    left: `0`,
    width: `50%`,
    textAlign: `start`,
    maxHeight: `40vh`,
    }}>
      <li>mobile apps </li> 
      <li>web development</li>
      <li>e-commerce</li>
      <button className="buttonw" style={{
        background: `transparent`,
        right: `25px`,
        }}>
          + more</button>
      </div>
     
     </div>
        
    </Layout>
  )
  
  export default IndexPage

