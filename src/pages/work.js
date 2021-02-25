import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Page two" />
    <div style={{
        background: `#e8de2a`,
        padding: `10vh 5vw 10vh 5vw`,
        margin: `10vh 10vw`,
        fontSize: `2rem`,
        fontWeight: `700`,
        fontFamily: `Poppins`,
        textAlign: `justify`,

    }}>past work</div>

  
<div className="work-container">
        <div className="work1" style={{
          textAlign: `right`
        }}>
        <p>
           <ul>sr. project manager</ul>
           <ul>sales director</ul>
           <ul>sales ops manager</ul>
           <ul>sales mktg manager</ul>
           <ul>e-commerce</ul>
          </p>
          </div>
        <div className="work2" style={{

        }}>
          <p>
          <ul>× awlogy media</ul>
          <ul>× the office express </ul>
          <ul>× grubhub </ul>
          <ul>× restaurants on the run</ul>
          <ul>× happy aura</ul>
          </p>
          </div>
          </div>
  </Layout>
)

export default Work
