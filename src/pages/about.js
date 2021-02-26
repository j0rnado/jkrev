import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import jork from "../images/jork.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me | jordank.co" />
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
      about    </h1>
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
          <div class="imgwrap" style={{  width: `100%` }}>
    <a href="/">
      <img src={jork} className="animated bounce" alt="jordank.co" style={{ 
        maxWidth: `20%`, 
        height: `auto`, 
        margin: `auto`, 
        position: `absolute`,


        }} />
        </a>
    </div>
  </Layout>
)

export default AboutPage

