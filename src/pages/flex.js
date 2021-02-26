import React from 'react';
import Layout from "../components/layout"
import portrait from "../images/portrait2.jpg"
import SEO from "../components/seo"


const Flex = () => (
  <Layout>
  <SEO title="jordank.co | Homepage" />
<div className="flextest" style={{
   backgroundImage: `url(${portrait})`, 
   backgroundRepeat: `no-repeat`,
   backgroundSize: `60vh`,
   backgroundPosition: `bottom center`,
}}>
<div className="x" style={{
}}>
  <h1 style={{
    fontSize: `2rem`,
    color: `white`,
    background: `black`,
    fontFamily: `Poppins`,
    fontWeight: `400`,
    textAlign: `center`,
    padding: `2vh 2vw`,


      }}>
        hi, i'm <br />jordan <br />köerner
        </h1>
</div>
<div className="xx" style={{
}}>
<h1 style={{
  fontSize: `2rem`,
  color: `white`,
  background: `orange`,
  padding: `2vh 2vw`,
  fontFamily: `Poppins`,
  fontWeight: `400`,

}}>i manage<br /> tech <br />projects</h1>
</div>
</div>


  
</Layout>

)

export default Flex;