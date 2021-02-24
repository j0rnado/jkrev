import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Page two" />
  <h1 style={{
    padding: `5vh 0vw 5vh 3vw`,
    color: `black`,
    fontSize: `2em`,
    marginBottom: `0`,
    maxWidth: `80%`,
  }}>
    past work
  </h1>
<div className="work-container">
        <div className="work1" style={{
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
