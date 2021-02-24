import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import jork from "../images/jork.svg"


const IndexPage = () => (
  <Layout style={{ display: `flex`, flexDirection: `column`, flexWrap: `nowrap`, height: `100vh`, alignContent: `center`, alignItems: `center` }}>
    <SEO title="Home" />
    <div class="imgwrap" style={{  width: `100%` }}>
    <a href="/">
      <img src={jork} className="ulogo" alt="jordank.co" style={{ 
        paddingTop: `40vh`, 
        display: `flex`, 
        maxWidth: `60px`, 
        height: `auto`, 
        margin: `auto`, 
        alignContent: `center`, 
        alignItems: `center`,
        }} />
        </a>
    </div>


  </Layout>
)

export default IndexPage
