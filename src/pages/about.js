import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import jork from "../images/jork.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me | jordank.co" />
    <div style={{
          maxWidth: `500px`,
              }}>
    <div className="tits" style={{
      display: `block`,
      flexWrap: `nowrap`,
      justifyContent: `flex-end`,
      alignItems: `flex-start`,
      alignContent: `stretch`,
      padding: `3vh 3vw`,
      background: `green`,

    
    }}>
      <h1 style={{
           fontSize: `2rem`,
           fontWeight: `700`,
           fontFamily: `Poppins`,
           background: `orange`,
           color: `white`,
           margin: `0`,
           marginBottom: `10px`,
           padding: `20px 20px`,
           textAlign: `center`
      }}>
        about
      </h1>
      </div>

      </div>

  </Layout>
)

export default AboutPage

