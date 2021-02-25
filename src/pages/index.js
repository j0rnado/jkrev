import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import portrait from "../images/portrait2.jpg"
import Link from "gatsby-link"


const IndexPage = () => (
    <Layout>
    <SEO title="jordank.co | Homepage" />

<div className="split-container" style={{
    backgroundImage: `url(${portrait})`, 
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `right bottom`,
    backgroundSize: `35vh`,
    height: `100vh`,
    marginBottom: `vh`,
    display: `grid`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
  

  }}>
       <div className="a" style={{
         padding: `13vh 3vw 3vh 3vw`,
             fontSize: `2.5rem`,
             lineHeight: `3rem`,
             fontFamily: `Poppins`,
             fontWeight: `700px`,
             flexDirection: `row`,
             maxWidth: `50vw`,


       }}>
    hi, i'm  jordan köerner</div>
    <h3 className="a"style={{
      display: `grid`,
    }}>i manage tech projects</h3>


      <div className="a" style={{   
    flexDirection: `row`,  
    color: `white`,
    margin: `13vh 3vw`,
    padding: `3vh 3vw`,
    marginBottom: `0`,
    fontSize: `1.25rem`,
    lineHeight: `1.5rem`,
    fontFamily: `Poppins`,
    background: `orangered`,
    textAlign: `start`,
    maxHeight: `30vw`,
    maxWidth: `50vw`,
    }}>
      <li>mobile apps </li> 
      <li>web development</li>
      <li>e-commerce</li>
      <button className="buttonw" style={{
        right: `25px`,
        }}>
          + more</button>
      </div>
     
     </div>
        
    </Layout>
  )
  
  export default IndexPage

