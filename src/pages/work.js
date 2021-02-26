import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="tits" style={{
  
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

    }}>
    past work
    </h1>
    </div>


  
<div className="work-container">
        <div className="work1" style={{
          textAlign: `right`
        }}>
        <h4>
          sr. project manager<br /> <br />
           sales director<br /> <br />
           sales ops manager<br /> <br />
           sales mktg manager<br /> <br />
           e-commerce<br /> <br />
          </h4>
          </div>
        <div className="work2" style={{

        }}>
          <h4 style={{ textAlign: `left`,
    
          }}>
          × awlogy media <br /> <br />
          × the office express<br /> <br />
          × grubhub<br /> <br />
          × restaurants on the run<br /> <br />
          × happy aura<br /> <br />
          </h4>
          </div>
          </div>
  </Layout>
)

export default Work
