import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import jork from "../images/jork.svg"


const AboutPage = () => (
    <Layout style={{ display: `flex`, flexDirection: `column`, flexWrap: `nowrap`, height: `100vh`, alignContent: `center`, alignItems: `center`, minWidth: `400px` }}>
    <SEO title="jordank.co | Contact" />
    <div class="imgwrap" style={{  width: `100%` }}>
    <a href="/">
      <img src={jork} className="animated bounce" alt="jordank.co" style={{ 
        maxWidth: `20%`, 
        height: `auto`, 
        margin: `auto`, 
        top: `0`,
        position: `absolute`,


        }} />
        </a>
    </div>
    </Layout>
  )
  
  export default AboutPage