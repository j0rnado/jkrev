import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Page two" />
  <h1 style={{
    padding: `10vh 0vw 5vh 3vw`,
    color: `black`,
    fontSize: `2em`,
    marginBottom: `0`,
  }}>
    services
  </h1>
<div className="work-container">
        <div className="work1" style={{
        }}>
        <p>
           <ul>web + app development </ul>
           <ul>e-commerce</ul>
           <ul>search engine optimization</ul>
           <ul>ui / ux  </ul>
           <ul>project management</ul>
          </p>
          </div>
        <div className="work2" style={{

        }}>
          <p>
          <ul style={{
              fontFamily: `Poppins`,
              textDecoration: `strong`,
              fontSize: `2em`,
          }}>  title</ul>
          <ul style={{
                            fontFamily: `serif`,
                           textDecoration: `strong`,
                           fontSize: `2em`,
          }}>title </ul>
          <ul>× something </ul>
          <ul>× somethingsomethingn</ul>
          <ul>× something something</ul>
          </p>
          </div>
          </div>
  </Layout>
)

export default Work
